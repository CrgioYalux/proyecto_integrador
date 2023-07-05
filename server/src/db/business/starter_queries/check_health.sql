DROP PROCEDURE IF EXISTS check_tables_exist;
CREATE PROCEDURE check_tables_exist(
	IN param_db_name VARCHAR(50)
)
BEGIN
	SELECT	t.table_name
	FROM information_schema.tables t
	WHERE
		t.table_schema = param_db_name
		AND
		t.table_type = "BASE TABLE";
END;

DROP PROCEDURE IF EXISTS check_views_exist;
CREATE PROCEDURE check_views_exist(
	IN param_db_name VARCHAR(50)
)
BEGIN
	SELECT	t.table_name as view_name
	FROM information_schema.tables t
	WHERE
		t.table_schema = param_db_name
		AND
		t.table_type = "VIEW";
END;

DROP PROCEDURE IF EXISTS check_stored_procedures_exist;
CREATE PROCEDURE check_stored_procedures_exist(
	IN param_db_name VARCHAR(50)
)
BEGIN
	SELECT	r.routine_schema as db_name,
			r.routine_name as stored_procedure_name
	FROM information_schema.routines as r
	WHERE
		r.routine_schema = param_db_name
		AND
		r.routine_type = 'PROCEDURE';
END;

DROP PROCEDURE IF EXISTS check_functions_exist;
CREATE PROCEDURE check_functions_exists(
	IN param_db_name VARCHAR(50)
)
BEGIN
	SELECT	r.routine_schema as db_name,
			r.routine_name as function_name
	FROM information_schema.routines r
	WHERE
		r.routine_schema = param_db_name
		AND
		r.routine_type = 'FUNCTION';
END;
