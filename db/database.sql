CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO employee  VALUES
    (1, 'Joe', 1000),
    (2, 'Fabius', 4100),
    (3, 'Maria', 1200),
    (4, 'Esmeralda', 5120),
    (5, 'Fabricio', 9000),
    (6, 'Juan', 1200);
