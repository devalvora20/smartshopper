create table orders(
order_id varchar(36),
user_id varchar(36),
no_of_items int,
order_date varchar(20),
primary key(order_id),
foreign key(user_id) 
references Users(user_id));

select * from users

insert into orders(order_id,user_id,no_of_items,order_date) 
            values(UUID(),'2efdecf0-bddf-11e8-bd08-0daff47a7110',2,'10/10/2010')

select * from orders;
select * from products;
insert into lineitems(lineItem_id,product_id,order_id,quantity)
           values(UUID(),'25dfe351-beec-11e8-89a7-f04da24a75d1','f84d347b-bf3e-11e8-89a7-f04da24a75d1',3);


create table lineitems(
lineItem_id varchar(36),
product_id varchar(36),
order_id varchar(36),
quantity int,
primary key(lineItem_id),
foreign key(product_id) references products(product_id),
foreign key(order_id) references orders(order_id)
);


create table organization(organization_id varchar(36),
name varchar(20),
address varchar(20),
contact varchar(20),
email varchar(50));

--drop table organization

INSERT INTO `organization` (`organization_id`, `name`, `address`, `contact`, `email`) 
VALUES (UUID(), 'swabhav', 'andheri', 101, 'contact@swabhavtechlabs.com');




select * from orders;
select * from lineitems;