CREATE DATABASE animals_db;

USE animals_db;

CREATE TABLE people (
	name VARCHAR(30) NOT NULL,
    has_pet BOOLEAN NOT NULL,
    pet_name VARCHAR(30),
    pet_age INTEGER(10)
);



DROP DATABASE IF EXISTS favorite_db;

CREATE DATABASE favorite_db;

USE favorite_db;

CREATE TABLE favorite_foods (
food VARCHAR(50) NOT NULL,
score INTEGER(10)
);

CREATE TABLE favorite_songs (
song VARCHAR(100) NOT NULL,
artist VARCHAR(50),
score INTEGER(10)
);

CREATE TABLE favorite_movies (
id INTEGER(10) AUTO_INCREMENT NOT NULL,
movie VARCHAR(100) NOT NULL,
five_times BOOLEAN,
score INTEGER(10),
PRIMARY KEY (id)
);