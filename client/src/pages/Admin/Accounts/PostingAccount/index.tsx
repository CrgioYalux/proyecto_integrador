import './PostingAccount.css';

import type { Account } from "../utils";

interface PostingAccountProps {
    className?: string;
    account: Account;
};

const PostingAccount: React.FC<PostingAccountProps> = ({
    className = '',
    account
}) => {
    return (
        <div className={`PostingAccount ${className}`}>
            <h3>{account.name}</h3>
        </div>
    );
};

export default PostingAccount;
