DROP PROCEDURE IF EXISTS drop_everything;

-- SELECT CONCAT('DROP TABLE IF EXISTS ', t.table_name, ' CASCADE;') as query
-- FROM information_schema.tables t
-- WHERE 
-- 	t.table_schema = param_db_name
-- 	AND
-- 	t.table_type = "BASE TABLE"

CREATE PROCEDURE drop_everything(
	IN param_db_name VARCHAR(50)
)
BEGIN

	-- SELECT CONCAT('DROP TABLE IF EXISTS ', t.table_name, ' CASCADE;') as query
	-- FROM information_schema.tables t
	-- WHERE 
	-- 	t.table_schema = param_db_name
	-- 	AND
	-- 	t.table_type = "BASE TABLE"
	-- UNION (
	-- 	SELECT CONCAT('DROP VIEW IF EXISTS ', v.table_name, ';') as query
	-- 	FROM information_schema.views v
	-- 	WHERE v.table_schema = param_db_name
	-- ) UNION (
	-- 	SELECT CONCAT('DROP ', r.routine_type, ' IF EXISTS ', r.routine_name, ';') as query
	-- 	FROM information_schema.routines r
	-- 	WHERE r.routine_schema = param_db_name
	-- );

	SELECT CONCAT('DROP VIEW IF EXISTS ', v.table_name, ';') as query
	FROM information_schema.views v
	WHERE v.table_schema = param_db_name
	UNION (
		SELECT CONCAT('DROP ', r.routine_type, ' IF EXISTS ', r.routine_name, ';') as query
		FROM information_schema.routines r
		WHERE r.routine_schema = param_db_name
	);

END;
