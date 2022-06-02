CREATE DATABASE crud;
CREATE  TABLE IF NOT EXISTS `posts` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `content` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
INSERT INTO `crud`.`posts` (`title`, `content`, `createdAt`) VALUES ('developer', 'fullstack', '2019-11-19 03:30:30');