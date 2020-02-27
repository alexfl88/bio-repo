-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;
USE programming_db;
-- Use programming db for the following statements --

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
id INT(10) auto_increment not null,
  -- Create a string column called "language" --
language VARCHAR(50) NOT NULL,
  -- Create an integer column called "rating" --
rating INT(10) NOT NULL,
  -- Create a boolean column called "mastered" which will automatically fill --
mastered BOOLEAN default true,
  -- with true when a new row is made and the value isn't otherwise defined. --
primary key(id)
  -- Set the id as this table's primary key

);

-- Create new example rows
INSERT into programming_languages
(language, rating) VALUES
('Javascript', 10),
('PHP', 5),
('SQL', 8);

SELECT * from programming_languages;

CREATE TABLE programmers (
id INT(10) auto_increment NOT NULL,
name VARCHAR(50) NOT NULL,
fave_lang_id INT(10),
primary key(id)
);
