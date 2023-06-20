import './WalkAccounts.css';

import type { Account } from "../utils";

import OpenEye from "../../../../components/Icons/OpenEye";

interface WalkAccountsProps {
    className?: string;
    accounts: Account[];
    offset?: { omitFirst: boolean, increment: number };
    ids?: number[];
};

const WalkAccounts: React.FC<WalkAccountsProps> = ({
    className = '',
    accounts,
    offset = { omitFirst: true, increment: 10 },
    ids = [],
}) => {
    return (
        <ul className={`WalkAccounts-list ${className}`}>
            {accounts.map((acc) => {
                const code = [...ids, acc.id];
                const text = `${code.join('.')} - ${acc.name}`;
                return (
                    <li
                        className='WalkAccounts-list__item'
                        key={acc.id}
                        style={{ marginLeft: offset.omitFirst ? '0' : `${offset.increment}px` }}
                    >
                        <div>
                            <OpenEye className='WalkAccounts-list-item__icon' />
                            <span className='WalkAccounts-list-item__text'>{text}</span>
                        </div>
                        {acc.accounts &&
                        <WalkAccounts 
                            className=''
                            accounts={acc.accounts}
                            offset={{ omitFirst: false, increment: offset.increment + offset.increment }}
                            ids={code}
                        />}
                    </li>
                )
            })}
        </ul>
    );
};

export default WalkAccounts;
