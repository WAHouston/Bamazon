CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50),
department_name VARCHAR(50),
price DECIMAL(10, 2),
stock_quantity INTEGER,
PRIMARY KEY(item_id)
);