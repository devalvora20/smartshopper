-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.12 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for swabhav_db
CREATE DATABASE IF NOT EXISTS `swabhav_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `swabhav_db`;

-- Dumping structure for table swabhav_db.cart
CREATE TABLE IF NOT EXISTS `cart` (
  `cart_id` varchar(36) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `totalPrice` double DEFAULT NULL,
  `product_id` varchar(36) DEFAULT NULL,
  `user_id` varchar(36) DEFAULT NULL,
  `date_created` varchar(36) DEFAULT NULL,
  `order_placed` char(1) DEFAULT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table swabhav_db.cart: ~2 rows (approximately)
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` (`cart_id`, `name`, `price`, `qty`, `totalPrice`, `product_id`, `user_id`, `date_created`, `order_placed`) VALUES
	('9406ebf0-c4c4-11e8-842b-f04da24a75d1', 'ipohne x', 50000, 1, 50000, '25dfe351-beec-11e8-89a7-f04da24a75d1', '2efdecf0-bddf-11e8-bd08-0daff47a7110', '10/04/2018', 'N'),
	('e6021650-c7b3-11e8-876d-0b6dc911062d', 'iPhone X', 50000, 1, 50000, '25dfe351-beec-11e8-89a7-f04da24a75d1', '2efdecf0-bddf-11e8-bd08-0daff47a7110', '2018-10-04 14:30:10.000', 'N');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;

-- Dumping structure for table swabhav_db.category
CREATE TABLE IF NOT EXISTS `category` (
  `category_id` varchar(36) NOT NULL,
  `description` varchar(20) DEFAULT NULL,
  `no_of_products` int(11) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table swabhav_db.category: ~2 rows (approximately)
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` (`category_id`, `description`, `no_of_products`) VALUES
	('b261f282-bee7-11e8-89a7-f04da24a75d1', 'mobiles', 3),
	('b27c2457-bee7-11e8-89a7-f04da24a75d1', 'laptops', 4),
	('b29ca483-bee7-11e8-89a7-f04da24a75d1', 'bags', 3);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;

-- Dumping structure for table swabhav_db.customers
CREATE TABLE IF NOT EXISTS `customers` (
  `id` binary(16) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table swabhav_db.customers: ~3 rows (approximately)
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` (`id`, `name`) VALUES
	(_binary 0x3DB97697B80011E88D8FF04DA24A75D1, 'John Doe'),
	(_binary 0x3DBC309FB80011E88D8FF04DA24A75D1, 'Will Smith'),
	(_binary 0x3DBC3322B80011E88D8FF04DA24A75D1, 'Mary Jane');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

-- Dumping structure for table swabhav_db.lineitems
CREATE TABLE IF NOT EXISTS `lineitems` (
  `lineItem_id` varchar(36) NOT NULL,
  `product_id` varchar(36) DEFAULT NULL,
  `order_id` varchar(36) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`lineItem_id`),
  KEY `product_id` (`product_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `lineitems_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  CONSTRAINT `lineitems_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table swabhav_db.lineitems: ~3 rows (approximately)
/*!40000 ALTER TABLE `lineitems` DISABLE KEYS */;
INSERT INTO `lineitems` (`lineItem_id`, `product_id`, `order_id`, `quantity`) VALUES
	('17ff5730-c87c-11e8-afad-0591f43cda00', '25dfe351-beec-11e8-89a7-f04da24a75d1', '17f45ab0-c87c-11e8-afad-0591f43cda00', 1),
	('18a24360-c87b-11e8-aa58-7b75d6cc8e20', '25dfe351-beec-11e8-89a7-f04da24a75d1', '189969c0-c87b-11e8-aa58-7b75d6cc8e20', 1),
	('3c464190-c87b-11e8-9cbe-b91d39c90b70', '25f740bd-beec-11e8-89a7-f04da24a75d1', '3c3885f0-c87b-11e8-9cbe-b91d39c90b70', 1),
	('733584e0-c87b-11e8-adbe-5d950f7ab4fd', '25dfe351-beec-11e8-89a7-f04da24a75d1', '732ea710-c87b-11e8-adbe-5d950f7ab4fd', 1),
	('77ec39b0-c87c-11e8-bf44-7957d6261ebf', '25dfe351-beec-11e8-89a7-f04da24a75d1', '77e534d0-c87c-11e8-bf44-7957d6261ebf', 1),
	('aa66a8a0-c87a-11e8-b47a-d3ef019b0a1e', '25dfe351-beec-11e8-89a7-f04da24a75d1', 'aa5a2580-c87a-11e8-b47a-d3ef019b0a1e', 1),
	('aa66cfb0-c87a-11e8-b47a-d3ef019b0a1e', '25f740bd-beec-11e8-89a7-f04da24a75d1', 'aa5a2580-c87a-11e8-b47a-d3ef019b0a1e', 1),
	('db3f6e20-c87b-11e8-afad-0591f43cda00', '25dfe351-beec-11e8-89a7-f04da24a75d1', 'db355c00-c87b-11e8-afad-0591f43cda00', 1);
/*!40000 ALTER TABLE `lineitems` ENABLE KEYS */;

-- Dumping structure for table swabhav_db.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` varchar(36) NOT NULL,
  `user_id` varchar(36) DEFAULT NULL,
  `no_of_items` int(11) DEFAULT NULL,
  `order_date` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table swabhav_db.orders: ~2 rows (approximately)
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`order_id`, `user_id`, `no_of_items`, `order_date`) VALUES
	('17f45ab0-c87c-11e8-afad-0591f43cda00', '2efdecf0-bddf-11e8-bd08-0daff47a7110', 1, '2018-10-05 14:23:13.000'),
	('189969c0-c87b-11e8-aa58-7b75d6cc8e20', '2efdecf0-bddf-11e8-bd08-0daff47a7110', 1, '2018-10-05 14:16:05.000'),
	('3c3885f0-c87b-11e8-9cbe-b91d39c90b70', '2efdecf0-bddf-11e8-bd08-0daff47a7110', 1, '2018-10-05 14:17:05.000'),
	('732ea710-c87b-11e8-adbe-5d950f7ab4fd', '2efdecf0-bddf-11e8-bd08-0daff47a7110', 1, '2018-10-05 14:18:37.000'),
	('77e534d0-c87c-11e8-bf44-7957d6261ebf', '2efdecf0-bddf-11e8-bd08-0daff47a7110', 1, '2018-10-05 14:25:54.000'),
	('aa5a2580-c87a-11e8-b47a-d3ef019b0a1e', '2efdecf0-bddf-11e8-bd08-0daff47a7110', 2, '2018-10-05 14:13:00.000'),
	('db355c00-c87b-11e8-afad-0591f43cda00', '2efdecf0-bddf-11e8-bd08-0daff47a7110', 1, '2018-10-05 14:21:31.000');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- Dumping structure for table swabhav_db.organization
CREATE TABLE IF NOT EXISTS `organization` (
  `organization_id` varchar(36) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `address` varchar(20) DEFAULT NULL,
  `contact` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table swabhav_db.organization: ~0 rows (approximately)
/*!40000 ALTER TABLE `organization` DISABLE KEYS */;
INSERT INTO `organization` (`organization_id`, `name`, `address`, `contact`, `email`) VALUES
	('cc855793-beef-11e8-89a7-f04da24a75d1', 'swabhav', 'andheri', '101', 'contact@swabhavtechlabs.com');
/*!40000 ALTER TABLE `organization` ENABLE KEYS */;

-- Dumping structure for table swabhav_db.products
CREATE TABLE IF NOT EXISTS `products` (
  `product_id` varchar(36) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `image` varchar(20) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `category_id` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table swabhav_db.products: ~9 rows (approximately)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`product_id`, `name`, `image`, `description`, `price`, `category_id`) VALUES
	('25dfe351-beec-11e8-89a7-f04da24a75d1', 'iPhone X', 'ix.jpg', 'This is iphones latest version.', 50000, 'b261f282-bee7-11e8-89a7-f04da24a75d1'),
	('25f740bd-beec-11e8-89a7-f04da24a75d1', 'Samsung S9', 's9.jpg', 'This is samsungs s9 version.', 40000, 'b261f282-bee7-11e8-89a7-f04da24a75d1'),
	('260f598d-beec-11e8-89a7-f04da24a75d1', 'Redmi Note 5', 'rn5.jpg', 'This is redmi note 5.', 30000, 'b261f282-bee7-11e8-89a7-f04da24a75d1'),
	('262351d5-beec-11e8-89a7-f04da24a75d1', 'Skybag Vault S3', 'skybag.jpeg', 'Built-in headphone cord port. Quick-access, front pocket for frequently needed items.', 900, 'b29ca483-bee7-11e8-89a7-f04da24a75d1'),
	('263470f6-beec-11e8-89a7-f04da24a75d1', 'Swiss Gear knought5', 'swiss.jpg', 'Padded, Airflow back panel with mesh fabric for back ventilation and support.', 600, 'b29ca483-bee7-11e8-89a7-f04da24a75d1'),
	('2643a590-beec-11e8-89a7-f04da24a75d1', 'Alienware 2.0', 'alien.jpg', 'Highlights a 13 inch-inch LED-illuminated wide screen having a determination of 2560x1600 pixels', 80000, 'b27c2457-bee7-11e8-89a7-f04da24a75d1'),
	('26548c78-beec-11e8-89a7-f04da24a75d1', 'Dell inspiron', 'dell.jpg', '8 GB LPDDR3 memory coupled with 512 GB storage to keep you hooked.', 70000, 'b27c2457-bee7-11e8-89a7-f04da24a75d1'),
	('2665be9a-beec-11e8-89a7-f04da24a75d1', 'High Sierra profound', 'hs.jpg', 'Ergonomically contoured, padded shoulder straps.', 2000, 'b29ca483-bee7-11e8-89a7-f04da24a75d1'),
	('26783a3c-beec-11e8-89a7-f04da24a75d1', 'Mac Book pro', 'mac.jpg', 'Geared for exceptional performance with MacBook comes with Touch Bar with integrated Touch ID.', 90000, 'b27c2457-bee7-11e8-89a7-f04da24a75d1');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Dumping structure for table swabhav_db.test
CREATE TABLE IF NOT EXISTS `test` (
  `firstName` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table swabhav_db.test: ~0 rows (approximately)
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` (`firstName`) VALUES
	('hello');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;

-- Dumping structure for table swabhav_db.users
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` varchar(36) NOT NULL,
  `firstName` varchar(20) DEFAULT NULL,
  `lastName` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `registrationDate` varchar(50) DEFAULT NULL,
  `role` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table swabhav_db.users: ~12 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`user_id`, `firstName`, `lastName`, `password`, `email`, `registrationDate`, `role`) VALUES
	('250f3c30-c2fd-11e8-978f-d7bf976f576b', NULL, NULL, NULL, NULL, '2018-09-28 14:31:53.000', 'u'),
	('2bac30c0-c18b-11e8-a642-15d621c680be', 'mayur', 'said', 'pass123', 'abc@abc.com', NULL, 'u'),
	('2efdecf0-bddf-11e8-bd08-0daff47a7110', 'kannan', 'sudhakaran', 'pass@123', 'abc@abc.com', '10/10/2010', 'u'),
	('3b5dfb70-c18b-11e8-a642-15d621c680be', NULL, 'said', 'pass123', 'abc@abc.com', NULL, 'u'),
	('64de1430-c253-11e8-bca5-53c13d304f7c', 'abc', 'xyz', '12345', 'pqr@pqr.com', '2018-09-27 18:16:46.000', 'u'),
	('7b0c2030-c24e-11e8-b6f3-c5b6a62579cd', 'bhavesh', 'talsania', 'abc@ab.com', 'abc@abc.com', NULL, 'u'),
	('8', 'a', 'b', 'd', 'c', 'f', 'U'),
	('965aed40-c225-11e8-9c29-11ce4f08aa58', 'aparna', 'unni', 'pass123', 'abc@abc.com', '10/12/2012', 'u'),
	('9912abb0-c250-11e8-b7d3-c353471980e3', 'bhavesh', 'talsania', 'abc@ab.com', 'abc@abc.com', '2018-09-27 17:56:45.000', 'u'),
	('9e759100-c18b-11e8-a642-15d621c680be', NULL, 'said', 'pass123', 'abc@abc.com', '10/12/2012', 'u'),
	('a8de0e60-c18b-11e8-a642-15d621c680be', 'mayur', 'said', 'pass123', 'abc@abc.com', '10/12/2012', 'u'),
	('b281e9e0-c254-11e8-8d47-6b729a60aa95', NULL, NULL, NULL, NULL, '2018-09-27 18:26:06.000', 'u'),
	('c6e15250-c2fd-11e8-acb1-7f189c6e4b1d', 'kannan', 'sudhakaran', 'pqr', 'abc@abc.com', '2018-09-28 14:36:25.000', 'u'),
	('e9ccd400-c24f-11e8-b5ef-7f6b3d986765', 'bhavesh', 'talsania', 'abc@ab.com', 'abc@abc.com', '4/8/2018', 'u');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
