CREATE TABLE IF NOT EXISTS User (
	id INT AUTO_INCREMENT NOT NULL,
	username VARCHAR(50) NOT NULL,
	hash CHAR(60) NOT NULL,
	salt CHAR(20) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Account (
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(50) NOT NULL,
	balance DECIMAL(10, 2) NOT NULL,
	parent_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (parent_id) REFERENCES Account(id)
);

CREATE TABLE IF NOT EXISTS Client (
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(50) NOT NULL,
	surname VARCHAR(50) NOT NULL,
	businessName VARCHAR(50) NOT NULL,
	cuit VARCHAR(20) NOT NULL UNIQUE,
	address VARCHAR(50) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS ComplexAccountingEntry (
	id INT AUTO_INCREMENT NOT NULL,
	description VARCHAR(250) NOT NULL,
	date DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS SimpleAccountingEntry (
	id INT AUTO_INCREMENT NOT NULL,
	side ENUM("DEBIT", "CREDIT") NOT NULL, -- DEBE, HABER
	amount DECIMAL(10, 2) NOT NULL,
	account_id INT NOT NULL,
	complexAccountingEntry_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (account_id) REFERENCES Account(id),
	FOREIGN KEY (complexAccountingEntry_id) REFERENCES ComplexAccountingEntry(id)
);


Create TABLE IF NOT EXISTS Provider (
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(50) NOT NULL,
	cuit VARCHAR(20) NOT NULL UNIQUE,
	address VARCHAR(50) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Product (
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(50) NOT NULL,
	description VARCHAR(250) NOT NULL,
	unitPrice DECIMAL(10, 2) NOT NULL,
	provider_id INT NOT NULL,
	colors VARCHAR(150) NOT NULL,
	sizes VARCHAR(150) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (provider_id) REFERENCES Provider(id)
);

CREATE TABLE IF NOT EXISTS Inventory (
	id INT AUTO_INCREMENT NOT NULL,
	product_id INT NOT NULL,
	stock INT NOT NULL CHECK (stock > -1),
	color VARCHAR(20) NOT NULL,
	size VARCHAR(20) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (product_id) REFERENCES Product (id)
);

CREATE TABLE IF NOT EXISTS ComplexSaleOperation (
	id INT AUTO_INCREMENT NOT NULL,
	amount DECIMAL(10, 2) NOT NULL,
	date DATETIME DEFAULT CURRENT_TIMESTAMP,
	client_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (client_id) REFERENCES Client(id)
);

CREATE TABLE IF NOT EXISTS SimpleSaleOperation (
	id INT AUTO_INCREMENT NOT NULL,
	quantity INT NOT NULL,
	complexSaleOperation_id INT NOT NULL,
	product_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (complexSaleOperation_id) REFERENCES ComplexSaleOperation(id),
	FOREIGN KEY (product_id) REFERENCES Product(id)
);

CREATE TABLE IF NOT EXISTS ComplexPurchaseOperation (
	id INT AUTO_INCREMENT NOT NULL,
	amount DECIMAL(10, 2) NOT NULL,
	date DATETIME DEFAULT CURRENT_TIMESTAMP,
	provider_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (provider_id) REFERENCES Provider(id)
);

CREATE TABLE IF NOT EXISTS SimplePurchaseOperation (
	id INT AUTO_INCREMENT NOT NULL,
	quantity INT NOT NULL,
	complexPurchaseOperation_id INT NOT NULL,
	product_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (complexPurchaseOperation_id) REFERENCES ComplexPurchaseOperation(id),
	FOREIGN KEY (product_id) REFERENCES Product(id)
);