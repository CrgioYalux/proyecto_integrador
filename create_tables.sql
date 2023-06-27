USE database;

DROP TABLE SimpleAccountingEntry;
DROP TABLE ComplexAccountingEntry;
DROP TABLE Account;
DROP TABLE SimplePurchaseOperation;
DROP TABLE SimpleSaleOperation;
DROP TABLE ComplexSaleOperation;
DROP TABLE Client;
DROP TABLE Product;
DROP TABLE ComplexPurchaseOperation;
DROP TABLE Provider;

CREATE TABLE IF NOT EXISTS Account (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    balance DECIMAL(10, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS ComplexAccountingEntry (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	description VARCHAR(250) NOT NULL
);

CREATE TABLE IF NOT EXISTS SimpleAccountingEntry (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	side ENUM("DEBIT", "CREDIT") NOT NULL, -- DEBE, HABER
	amount DECIMAL(10, 2) NOT NULL,
	account_id INT NOT NULL,
    complexAccountingEntry_id INT NOT NULL,
	FOREIGN KEY (account_id) REFERENCES Account(id),
    FOREIGN KEY (complexAccountingEntry_id) REFERENCES ComplexAccountingEntry(id)
);

CREATE TABLE IF NOT EXISTS Client (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    businessName VARCHAR(50) NOT NULL,
    cuit VARCHAR(20) NOT NULL,
    address VARCHAR(50) NOT NULL
);

Create TABLE IF NOT EXISTS Provider (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    cuit VARCHAR(20) NOT NULL,
    address VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS Product (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(250) NOT NULL,
	value DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    provider_id INT NOT NULL,
    colors VARCHAR(100) NOT NULL,
    sizes VARCHAR(100) NOT NULL,
    FOREIGN KEY (provider_id) REFERENCES Provider(id)
);

CREATE TABLE IF NOT EXISTS ComplexSaleOperation (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	amount DECIMAL(10, 2) NOT NULL,
    date DATE NOT NULL,
    client_id INT NOT NULL,
    FOREIGN KEY (client_id) REFERENCES Client(id)
);

CREATE TABLE IF NOT EXISTS SimpleSaleOperation (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    quantity INT NOT NULL,
    complexSaleOperation_id INT NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (complexSaleOperation_id) REFERENCES ComplexSaleOperation(complexSaleOperation_id),
    FOREIGN KEY (product_id) REFERENCES Product(id)
);

CREATE TABLE IF NOT EXISTS ComplexPurchaseOperation (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    amount DECIMAL(10, 2) NOT NULL,
    date DATE NOT NULL,
	provider_id INT NOT NULL,
    FOREIGN KEY (provider_id) REFERENCES Provider(id)
);

CREATE TABLE IF NOT EXISTS SimplePurchaseOperation (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    quantity INT NOT NULL,
    complexPurchaseOperation_id INT NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (complexPurchaseOperation_id) REFERENCES ComplexPurchaseOperation(id),
    FOREIGN KEY (product_id) REFERENCES Product(id)
);

SHOW TABLES;
