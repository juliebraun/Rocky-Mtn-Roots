CREATE DATABASE IF NOT EXISTS RMR_db;
USE RMR_db;

CREATE TABLE items (
	id int NOT NULL AUTO_INCREMENT,
    item_category varchar (100) NOT NULL,
    item_name varchar (100) NOT NULL,
    item_price decimal(8, 2) NOT NULL,
    item_description varchar (500) NOT NULL,
    size ENUM('x-small', 'small', 'medium', 'large', 'x-large'),
    qty_stock INT (50) NOT NULL,
     instock BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);