CREATE PROCEDURE create_user(
	IN param_username VARCHAR(50),
	IN param_hash CHAR(60),
	IN param_salt CHAR(60)
)
BEGIN
	INSERT INTO User (username, hash, salt)
	VALUES (param_username, param_hash, param_salt);
END;

CREATE PROCEDURE create_account(
	IN param_name VARCHAR(50),
	IN param_balance DECIMAL(10, 2),
	IN param_parent_id INT
)
BEGIN
	INSERT INTO Account (name, balance, parent_id)
	VALUES (param_name, param_balance, param_parent_id);
END;

CREATE PROCEDURE debit_account(
	IN param_description VARCHAR(250),
	IN param_amount DECIMAL(10, 2),
	IN param_account_id INT,
	IN is_last INT
)
BEGIN
	SET @complex_accounting_entry_created := IFNULL(@complex_accounting_entry_created, 0);
	SET @complex_accounting_entry_id := IFNULL(@complex_accounting_entry_id, 0);
	
	IF @complex_accounting_entry_created = 0 THEN
		INSERT INTO ComplexAccountingEntry (description)
		VALUES (param_description);

		SET @complex_accounting_entry_created := 1;
		SET @complex_accounting_entry_id := LAST_INSERT_ID();
	END IF;

	INSERT INTO SimpleAccountingEntry (side, amount, account_id, complexAccountingEntry_id)
	VALUES ("DEBIT", param_amount, param_account_id, @complex_accounting_entry_id);

	IF is_last = 1 THEN
		SET @complex_accounting_entry_created := 0;
		UPDATE Account as A
		JOIN (
			SELECT
				AVG(SAE.account_id) as account_id,
				SUM(SAE.amount) as result
			FROM SimpleAccountingEntry as SAE
			WHERE
				SAE.side = "DEBIT" AND
				SAE.complexAccountingEntry_id = @complex_accounting_entry_id
		) AS subquery
		ON A.id = subquery.account_id
		SET balance = balance - subquery.result;
		
	END IF;
END;

CREATE PROCEDURE credit_account(
	IN param_description VARCHAR(250),
	IN param_amount DECIMAL(10, 2),
	IN param_account_id INT,
	IN is_last INT
)
BEGIN
	SET @complex_accounting_entry_created := IFNULL(@complex_accounting_entry_created, 0);
	SET @complex_accounting_entry_id := IFNULL(@complex_accounting_entry_id, 0);
	
	IF @complex_accounting_entry_created = 0 THEN
		INSERT INTO ComplexAccountingEntry (description)
		VALUES (param_description);

		SET @complex_accounting_entry_created := 1;
		SET @complex_accounting_entry_id := LAST_INSERT_ID();
	END IF;

	INSERT INTO SimpleAccountingEntry (side, amount, account_id, complexAccountingEntry_id)
	VALUES ("CREDIT", param_amount, param_account_id, @complex_accounting_entry_id);

	IF is_last = 1 THEN
		SET @complex_accounting_entry_created := 0;
		UPDATE Account as A
		JOIN (
			SELECT
				AVG(SAE.account_id) as account_id,
				SUM(SAE.amount) as result
			FROM SimpleAccountingEntry as SAE
			WHERE
				SAE.side = "CREDIT" AND
				SAE.complexAccountingEntry_id = @complex_accounting_entry_id
		) AS subquery
		ON A.id = subquery.account_id
		SET balance = balance + subquery.result;
		
	END IF;
END;
