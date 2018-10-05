create table cart(
cart_id varchar(36),
name varchar(20),
price double,
qty int,
totalPrice double,
product_id varchar(36),
user_id varchar(36),
date_created varchar(36),
order_placed char(1),
primary key(cart_id),
foreign key(user_id) references users(user_id),
foreign key(product_id) references products(product_id));

select * from cart

-- drop table cart

select * from users;
select * from products;
select * from orders;
select * from cart;

insert into cart(cart_id,name,price,qty,totalPrice,product_id,user_id,date_created,order_placed) 
values(UUID(),'ipohne x',50000,1,50000,
'25dfe351-beec-11e8-89a7-f04da24a75d1','2efdecf0-bddf-11e8-bd08-0daff47a7110','10/04/2018','N');
