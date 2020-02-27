CREATE DATABASE movieplannerDB;

USE movieplannerDB;

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  movie varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO movies (movie) VALUES ('Plan to watch a movie.');