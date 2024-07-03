-- MUDAR SENHA PARA ROOT *SENAC*
DROP dbdevforge;
CREATE DATABASE dbdevforge;
USE dbdevforge;
CREATE TABLE users (
    id INT AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);