CREATE DATABASE cultvatingcraft;
USE cultvatingcraft;

CREATE TABLE `contactform` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255 ) NOT NULL,
  `sender_email` VARCHAR( 255) NOT NULL,
  `reason` VARCHAR( 255 ) NOT NULL,
  `message` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,
  
  PRIMARY KEY ( `id` ) 
);
