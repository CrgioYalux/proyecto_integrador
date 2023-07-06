import type { PoolConnection } from "mysql";
import type { User } from "../models/user";
import bcrypt from 'bcrypt'

type UserStored = {
    id: number,
    username: string,
    hash: string,
};

type UserSearchResult = { exists: false, user: null } | { exists: true, user: UserStored };

const checkIfUserExists = (pool: PoolConnection, user: User): Promise<UserSearchResult> => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT U.id, U.username, U.hash FROM User U WHERE U.username = ?', [user.username], (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            const rows = results as UserStored[];
            if (!rows.length) {
                resolve({ exists: false, user: null });
                return;
            }

            resolve({ exists: true, user: rows[0] });
        });
    });
};

const createUser = (pool: PoolConnection, user: User): Promise<{ created: boolean }> => {
    return new Promise(async (resolve, reject) => {
        const hash = await bcrypt.hash(user.password, 10);

        pool.query('INSERT INTO User (username, hash) VALUES (?, ?)', [user.username, hash], (error, results) => {
            if (error) {
                reject({ error });
                return;
            }
            if (results.affectedRows) {
                resolve({ created: true });
            }
        });
    });
};

export { checkIfUserExists, createUser };
