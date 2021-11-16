-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- CREATING TABLES


DROP TABLE IF EXISTS category;
CREATE TABLE category (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(30) NOT NULL -- confirm varchar is string
);

DROP TABLE IF EXISTS product;
CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    price DECIMAL NOT NULL, -- validates that the value is a decimal?
    stock INT NOT NULL, --default value is ten and validate that the value is numeric
    category_id INT,
    FOREIGN KEY(category_id)
    REFERENCES category(id) -- references the Category model's id
    ON DELETE SET NULL
);

DROP TABLE IF EXISTS tag;
CREATE TABLE tag (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(30)
);

DROP TABLE IF EXISTS productTag;
CREATE TABLE productTag (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    tag_id INT,
    FOREIGN KEY(product_id)
    REFERENCES product(id)
    ON DEFAULT SET NULL,
    FOREIGN KEY(tag_id)
    REFERENCES tag(id)
    ON DEFAULT SET NULL
);


