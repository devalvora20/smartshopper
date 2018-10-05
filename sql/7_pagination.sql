-- https://stackoverflow.com/questions/3799193/mysql-data-best-way-to-implement-paging

SELECT * FROM products LIMIT 0,3

SELECT * FROM products LIMIT 5,10 -- initial row starts with 0