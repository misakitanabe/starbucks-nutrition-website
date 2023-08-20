-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: localhost    Database: Starbucks2
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `starbucks2`
--

DROP TABLE IF EXISTS `starbucks2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `starbucks2` (
  `id` int DEFAULT NULL,
  `item` text,
  `calories` int DEFAULT NULL,
  `fat` int DEFAULT NULL,
  `carb` int DEFAULT NULL,
  `fiber` int DEFAULT NULL,
  `protein` int DEFAULT NULL,
  `type` text,
  `src` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `starbucks2`
--

LOCK TABLES `starbucks2` WRITE;
/*!40000 ALTER TABLE `starbucks2` DISABLE KEYS */;
INSERT INTO `starbucks2` VALUES (1,'8-Grain Roll',350,8,67,5,10,'bakery','images/8-grain-roll.png'),(2,'Banana Nut Loaf',490,19,75,4,7,'bakery','images/banana-nut-loaf.png'),(3,'Blueberry Scone',460,22,61,2,7,'bakery','images/blueberry-scone.png'),(4,'Bountiful Blueberry Muffin',370,14,55,0,6,'bakery','images/bountiful-blueberry-muffin.png'),(5,'Butter Croissant ',310,18,32,0,5,'bakery','images/butter-croissant.png'),(6,'Cheese Danish',420,25,39,0,7,'bakery','images/cheese-danish.png'),(7,'Chocolate Chunk Cookie',380,17,51,2,4,'bakery','images/chocolate-chunk-cookie.png'),(8,'Chocolate Croissant',300,17,34,2,5,'bakery','images/chocolate-croissant.png'),(9,'Double Chocolate Brownie',410,24,46,3,6,'bakery','images/double-chocolate-brownie.png'),(10,'Everything with Cheese Bagel',280,2,56,2,10,'bakery','images/everything-with-cheese-bagel.png'),(11,'Iced Lemon Pound Cake',490,23,67,0,5,'bakery','images/iced-lemon-pound-cake.png'),(12,'Marble Pound Cake',350,13,54,0,6,'bakery','images/marble-pound-cake.png'),(13,'Marshmallow Dream Bar',210,4,43,0,0,'bakery','images/marshmallow-dream-bar.png'),(14,'Old-Fashioned Glazed Doughnut',420,21,57,0,4,'bakery','images/old-fashioned-glazed-doughnut.png'),(15,'Petite Vanilla Bean Scone',140,5,21,0,0,'bakery','images/petite-vanilla-bean-scone.png'),(16,'Plain Bagel',280,1,59,2,9,'bakery','images/plain-bagel.png'),(17,'Pumpkin Bread',390,14,61,2,6,'bakery','images/pumpkin-bread.png'),(18,'Reduced-Fat Cinnamon Swirl Coffee Cake',340,9,62,2,4,'bakery','images/coffee-cake.png'),(19,'Birthday Cake Pop',170,9,22,0,0,'petite','images/birthday-cakepop.png'),(20,'Bacon & Gouda Artisan Breakfast Sandwich',350,18,30,0,17,'hot breakfast','images/bacon-gouda-sandwich.png'),(21,'Sausage & Cheddar Classic Breakfast Sandwich',500,28,41,0,19,'hot breakfast','images/sausage-breakfast-sandwich.png'),(22,'Spinach & Feta Breakfast Wrap',290,10,33,6,19,'hot breakfast','images/spinach-feta-wrap.png'),(23,'Ham & Swiss Panini',360,9,43,2,28,'sandwich','images/ham-swiss-panini.png'),(24,'Roasted Tomato & Mozzarella Panini',390,18,44,3,15,'sandwich','images/tomato-mozz-panini.png'),(25,'Strawberry & Blueberry Yogurt Parfait',300,4,60,3,7,'parfait','images/strawberry-blueberry-parfait.png');
/*!40000 ALTER TABLE `starbucks2` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-17 15:05:26
