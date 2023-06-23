- Modify Account type for component-logic purposes
- Identify the current selected account by applying some effect to the OpenEye icon in each WalkAccounts-list__item
- Add the possibility to expand and contract an account
- Reduce as much as possible 'complex' operations (e.g. recursion for searching)
    - Do not forget that, in most cases, the accounting plan is going to be a fixed, in length and depth, array
    of accounts and that it's not actually a state but an almost (because of the balances) readonly information
