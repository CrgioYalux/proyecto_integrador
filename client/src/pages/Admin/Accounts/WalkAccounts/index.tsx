import './WalkAccounts.css';

import { useState } from 'react';

import OpenEye from "../../../../components/Icons/OpenEye";
import Plus from '../../../../components/Icons/Plus';
import Minus from '../../../../components/Icons/Minus';

import type { Account, AccountInClient } from "../utils";

interface WalkAccountsProps {
    className?: string;
    accounts: Account[];
    offset?: { omitFirst: boolean, increment: number };
    ids?: number[];
    selectedAccount: AccountInClient;
    selectAccount: (account: AccountInClient) => void;
};

const WalkAccounts: React.FC<WalkAccountsProps> = ({
    className = '',
    accounts,
    offset = { omitFirst: true, increment: 10 },
    ids = [],
    selectedAccount,
    selectAccount,
}) => {
    return (
        <ul className={`WalkAccounts-list ${className}`}>
            {accounts.map((acc) => {
                const joinedIds = [...ids, acc.id];
                const code = joinedIds.join('.');
                const text = `${code} - ${acc.name}`;
                const [expanded, setExpanded] = useState<boolean>(true);
                
                return (
                    <li
                    className={`WalkAccounts-list__item ${selectedAccount.code === code ? '--selected' : '--not-selected'}`}
                    key={acc.id}
                    style={{ marginLeft: offset.omitFirst ? '0' : `${offset.increment}px` }}
                    >
                        <div>
                            <button
                            className='WalkAccounts-list-item__bt WalkAccounts-list-item__select-bt'
                            onClick={() => selectAccount({ ...acc, code })}
                            >
                                <OpenEye className='WalkAccounts-list-item-bt__icon' />
                            </button>

                            <span className='WalkAccounts-list-item__text'>{text}</span>

                            {acc.accounts && 
                            <button
                            className='WalkAccounts-list-item__bt WalkAccounts-list-item__expand-bt'
                            onClick={() => setExpanded(prev => !prev)}
                            >
                                {expanded ? <Minus className='WalkAccounts-list-item-bt__icon'/> : <Plus className='WalkAccounts-list-item-bt__icon' />}
                            </button>}
                        </div>

                        {(acc.accounts && expanded) &&
                        <WalkAccounts 
                        className=''
                        accounts={acc.accounts}
                        offset={{ omitFirst: false, increment: offset.increment + offset.increment }}
                        ids={joinedIds}
                        selectedAccount={selectedAccount}
                        selectAccount={selectAccount}          
                        />}
                    </li>
                );
            })}
        </ul>
    );
};

export default WalkAccounts;
