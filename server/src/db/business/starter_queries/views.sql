CREATE OR REPLACE VIEW all_accounting_entries AS
SELECT	CAE.id,
		CAE.description,
		CAE.date,
		SAE.side,
		SUM(SAE.amount) as amount,
		A.name as account_name
FROM 
	ComplexAccountingEntry CAE 
	JOIN
	SimpleAccountingEntry SAE 
		ON CAE.id = SAE.complexAccountingEntry_id
	JOIN Account A
		ON SAE.account_id = A.id
GROUP BY CAE.id, SAE.side, A.name;

CREATE OR REPLACE VIEW full_inventory AS
SELECT	I.id,
		I.stock,
		I.size,
		I.color,
		Prod.name,
		Prod.description,
		Prod.unitPrice,
		Prov.name as brand
FROM
	Inventory I
	JOIN
	Product Prod
		ON I.product_id = Prod.id
	JOIN
	Provider Prov
		ON Prod.provider_id = Prov.id;
	
CREATE OR REPLACE VIEW all_accounts AS
SELECT * FROM Account A;
