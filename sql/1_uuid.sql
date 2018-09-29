
-- create  a sample uuid2 table 
-- refernece : http://www.mysqltutorial.org/mysql-uuid/
-- These commands only work on mysql v8.0

CREATE TABLE customers (
    id BINARY(16) PRIMARY KEY,
    name VARCHAR(255)
);

select * from customers
select UUID();
select UUID_TO_BIN(uuid())



INSERT INTO customers(id, name)
VALUES(UUID_TO_BIN(UUID()),'John Doe'),
      (UUID_TO_BIN(UUID()),'Will Smith'),
      (UUID_TO_BIN(UUID()),'Mary Jane');



