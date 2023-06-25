import './Accounts.css';

import { useState } from 'react';

import WalkAccounts from './WalkAccounts';
import PostingAccount from './PostingAccount';

import type { AccountInClient, AccountingPlan } from './utils';

import mock from './accounts.json';

interface AccountsProps { };

const Accounts: React.FC<AccountsProps> = ({}) => {
    const [accountingPlan, _setAccountingPlan] = useState<AccountingPlan>(() => mock.accounts as AccountingPlan);
    const [selectedAccount, setSelectedAccount] = useState<AccountInClient>(() => ({ ...accountingPlan[0], code: `${accountingPlan[0].id}` }));

    return (
        <div className='Accounts'>
            <h1>Accounts</h1>
            <div className='Accounts__content'>
                <WalkAccounts
                className='Accounts-content__WalkAccounts'
                accounts={accountingPlan}
                selectedAccount={selectedAccount}
                selectAccount={(account) => setSelectedAccount(account)}
                />
                <PostingAccount className='Accounts-content__PostingAccount' account={selectedAccount} />
            </div>
        </div>
    );
};

export default Accounts;
