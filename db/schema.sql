CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

INSERT INTO burgers(burger_name, devoured)
VALUES ("Hamburger", false), ("Cheeseburger", false), ("Bacon Cheeseburger", false), ("Pizzaburger", false), ("Chili Burger", false), ("Belly Bomb Burger", false), ("Yee Haw Burger", false);
SELECT * from burgers_db;