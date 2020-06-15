CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

USE burgers_db;INSERT INTO burgers(burger_name, devoured)
VALUES ("Hamburger", false), ("Cheeseburger", false), ("Peter Burger", false), ("Lois Burger", false), ("Stewy Burger", false), ("Brian Burger", false), ("Meg Burger", false), ("Chris Burger", false), ("Bacon Cheeseburger", false), ("Pizza Burger", false), ("Chili Burger", false), ("Belly Bomb Burger", false), ("Yee Haw Burger", false);

SELECT * from burgers
