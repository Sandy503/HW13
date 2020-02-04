DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger VARCHAR(99) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);