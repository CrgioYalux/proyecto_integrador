import './Accounts.css';

import { useState } from 'react';
import mock from './accounts.json';
import type { Account,  AccountingPlan } from './utils';

import WalkAccounts from './WalkAccounts';
import PostingAccount from './PostingAccount';

interface AccountsProps { };
const Accounts: React.FC<AccountsProps> = ({}) => {
    const [accountingPlan, setAccountingPlan] = useState<AccountingPlan>(() => mock.accounts as AccountingPlan);
    const [selectedAccount, setSelectedAccount] = useState<Account>(() => accountingPlan[0]);

    return (
        <div className='Accounts'>
            <h1>Accounts</h1>
            <div className='Accounts__content'>
                <WalkAccounts className='Accounts-content__WalkAccounts' accounts={accountingPlan} />
                <PostingAccount className='Accounts-content__PostingAccount' account={selectedAccount} />
            </div>
        </div>
    );
};

export default Accounts;
