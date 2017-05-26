-- invalid: value3 does not match email
INSERT INTO chef (username, password_digest, email) VALUES ('values1', 'values2', 'values3');

-- valid: email value passes email regex as defined in make-table-chef.sql
INSERT INTO chef (username, password_digest, email) VALUES ('value1', 'value2', 'a@a.a');

-- drop the table to start over
DROP TABLE chef
