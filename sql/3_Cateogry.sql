create table category (
category_id varchar(36),
description varchar(20),
no_of_products int,
primary key(category_id));


drop table category
truncate table category

insert into category(category_id,description,no_of_products) values( UUID() ,'mobiles',3);
insert into category(category_id,description,no_of_products) values(UUID(),'laptops',4);
insert into category(category_id,description,no_of_products) values(UUID(),'bags',3);

select * from category

