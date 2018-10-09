create table products(
	product_id varchar(36),
	name varchar(20),
	image varchar(20),
	description varchar(200),
	price int,
	category_id varchar(36),
primary key(product_id), 
foreign key (category_id) 
references category(category_id));

drop table products;

select * from category

INSERT INTO `products` (`product_id`, `name`, `image`, `description`, `price`, `category_id`) VALUES (UUID(), 'iPhone X', 'ix.jpg', 'This is iphones latest version.', 50000, 'b261f282-bee7-11e8-89a7-f04da24a75d1');
INSERT INTO `products` (`product_id`, `name`, `image`, `description`, `price`, `category_id`) VALUES (UUID(), 'Samsung S9', 's9.jpg', 'This is samsungs s9 version.', 40000, 'b261f282-bee7-11e8-89a7-f04da24a75d1');
INSERT INTO `products` (`product_id`, `name`, `image`, `description`, `price`, `category_id`) VALUES (UUID(), 'Redmi Note 5', 'rn5.jpg', 'This is redmi note 5.', 30000, 'b261f282-bee7-11e8-89a7-f04da24a75d1');
INSERT INTO `products` (`product_id`, `name`, `image`, `description`, `price`, `category_id`) VALUES (UUID(), 'Skybag Vault S3', 'skybag.jpeg', 'Built-in headphone cord port. Quick-access, front pocket for frequently needed items.', 900, 'b29ca483-bee7-11e8-89a7-f04da24a75d1');
INSERT INTO `products` (`product_id`, `name`, `image`, `description`, `price`, `category_id`) VALUES (UUID(), 'Swiss Gear knought5', 'swiss.jpg', 'Padded, Airflow back panel with mesh fabric for back ventilation and support.', 600, 'b29ca483-bee7-11e8-89a7-f04da24a75d1');
INSERT INTO `products` (`product_id`, `name`, `image`, `description`, `price`, `category_id`) VALUES (UUID(), 'Alienware 2.0', 'alien.jpg', 'Highlights a 13 inch-inch LED-illuminated wide screen having a determination of 2560x1600 pixels', 80000, 'b27c2457-bee7-11e8-89a7-f04da24a75d1');
INSERT INTO `products` (`product_id`, `name`, `image`, `description`, `price`, `category_id`) VALUES (UUID(), 'Dell inspiron', 'dell.jpg', '8 GB LPDDR3 memory coupled with 512 GB storage to keep you hooked.', 70000, 'b27c2457-bee7-11e8-89a7-f04da24a75d1');
INSERT INTO `products` (`product_id`, `name`, `image`, `description`, `price`, `category_id`) VALUES (UUID(), 'High Sierra profound', 'hs.jpg', 'Ergonomically contoured, padded shoulder straps.', 2000, 'b29ca483-bee7-11e8-89a7-f04da24a75d1');
INSERT INTO `products` (`product_id`, `name`, `image`, `description`, `price`, `category_id`) VALUES (UUID(), 'Mac Book pro', 'mac.jpg', 'Geared for exceptional performance with MacBook comes with Touch Bar with integrated Touch ID.', 90000, 'b27c2457-bee7-11e8-89a7-f04da24a75d1');


select * from products;

select product_id,name,image,products.description,price,
category.description as category_name 
from products join category
on products.category_id = category.category_id
order by category_name


