SHOW TABLES;

INSERT INTO people (name, has_pet, pet_name, pet_age) VALUES ("Mark", true, "Roxy", 10), ("Kevin", true, 'Spot', 3);

INSERT INTO people SET name = 'Mandy', has_pet = false;

SELECT * FROM people;

DELETE from people WHERE id = 4;

UPDATE people SET has_pet = true, pet_age = '1', pet_name = 'Goldie'  WHERE name = 'Mandy';