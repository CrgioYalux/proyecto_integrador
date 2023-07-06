const products = {
    getOneById: `
        SELECT  Prod.id,
                Prod.name,
                Prod.description,
                Prod.unitPrice,
                Prod.colors,
                Prod.sizes,
                Prov.name AS brand
        FROM Product Prod 
        JOIN Provider Prov ON Prod.provider_id = Prov.id
        WHERE Prod.id = ?
    `,
    getAll: `
        SELECT  Prod.id,
                Prod.name,
                Prod.description,
                Prod.unitPrice,
                Prod.colors,
                Prod.sizes,
                Prov.name AS brand
        FROM Product Prod 
        JOIN Provider Prov ON Prod.provider_id = Prov.id
    `,
};

const sales = {
    getOneById: `
        SELECT  *
        FROM ComplexSaleOperation CSO
        JOIN SimpleSaleOperation SSO
        ON CSO.id = SSO.complexSaleOperation_id
        WHERE CSO.id = ?
    `,
    getAll: `
        SELECT *
        FROM ComplexSaleOperation CSO
        JOIN SimpleSaleOperation SSO
        ON CSO.id = SSO.complexSaleOperation_id
    `,
    create: `
    `
};

const accounts = {
    getOneById: `
        SELECT  A.id,
                A.name,
                A.balance,
                A.parent_id,
                
        FROM Account A
        JOIN SimpleAccountingEntry SAE
        ON SAE.account_id = A.id
        JOIN ComplexAccountingEntry CAE
        ON CAE.id = SAE.complexAccountingEntry_id
    `,
};

const Query = {
    products,
};

export { Query };
