CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE playlist (
id INT(10) AUTO_INCREMENT NOT NULL,
title VARCHAR(100) NOT NULL,
artist VARCHAR(100) NOT NULL,
genre VARCHAR(100) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO playlist
(title, artist, genre)
VALUES ('Gangnam Style', 'Psy', 'Pop');

INSERT INTO playlist
(title, artist, genre)
VALUES ('Adventure of a Lifetime', 'Coldplay', 'Alt');

INSERT INTO playlist
(title, artist, genre)
VALUES ('Bad Guy', 'Billie Ellish', 'Rock');

SELECT * from playlist;