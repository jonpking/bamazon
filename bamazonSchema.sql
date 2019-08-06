create database bamazon;
use bamazon;
create table products(
	item_id integer(10) auto_increment not null primary key,
    product_name varchar(100), 
    department_name varchar(50),
    price integer(10),
    stock_quantity integer(10));
alter table products auto_increment=100;
insert into products(product_name, department_name, price, stock_quantity)
	values("Delicious Drink", "Grocery", 4, 20),
    ("Yummy Food", "Grocery", 3, 30),
    ("Trendy Board Game", "Toys", 20, 25),
    ("Nifty Children's Toy", "Toys", 35, 20),
    ("Awesome Game Console", "Electronics", 200, 50),
    ("Popular Movie", "Electronics", 20, 35),
    ("Hipster T-Shirt", "Clothing", 15, 45),
    ("Ugly Sweater", "Clothing", 12, 50),
    ("Overpriced Writing Implement", "Stationary", 2, 75),
    ("Funky Notebook", "Stationary", 5, 60);
select * from products;