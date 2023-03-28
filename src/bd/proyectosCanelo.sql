CREATE DATABASE  IF NOT EXISTS `proyectocanelo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `proyectocanelo`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: proyectocanelo
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `autors`
--

DROP TABLE IF EXISTS `autors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autors` (
  `idAutor` int NOT NULL AUTO_INCREMENT,
  `autor` varchar(1024) NOT NULL,
  `job` varchar(1024) NOT NULL,
  `image` longtext NOT NULL,
  PRIMARY KEY (`idAutor`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autors`
--

LOCK TABLES `autors` WRITE;
/*!40000 ALTER TABLE `autors` DISABLE KEYS */;
INSERT INTO `autors` VALUES (1,'Andrea Gomez','diseñadora gráfica','https://randomuser.me/api/portraits/women/29.jpg'),(2,'Laura Torres','ingeniera de software','https://randomuser.me/api/portraits/women/50.jpg'),(3,'Valeria García','analista de datos','https://randomuser.me/api/portraits/women/68.jpg'),(4,'Ana Castro','especialista IA','https://randomuser.me/api/portraits/women/65.jpg');
/*!40000 ALTER TABLE `autors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `idProjects` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `descripcion` varchar(1024) NOT NULL,
  `slogan` varchar(1024) NOT NULL,
  `repo` varchar(1024) NOT NULL,
  `demo` varchar(1024) NOT NULL,
  `technologies` varchar(1024) NOT NULL,
  `image` longtext NOT NULL,
  PRIMARY KEY (`idProjects`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'EcoLife','Una aplicación móvil que te ayuda a llevar una vida más sostenible, reducir tu huella de carbono y cuidar el medio ambiente','Cuida el planeta, una acción a la vez','https://github.com/Adalab/project-promo-s-module-4-team-1','http://beta.adalab.es/project-promo-s-module-3-team-1/','react','https://cdn.pixabay.com/photo/2017/06/05/14/50/environment-2371638_960_720.jpg'),(2,'MindMate',' Una plataforma en línea que te permite conectarte con un mentor personalizado y aprender habilidades de bienestar mental para mejorar tu calidad de vida.',' Conéctate con tu bienestar','https://github.com/Adalab/project-promo-s-module-4-team-1 ','http://beta.adalab.es/project-promo-s-module-3-team-1/','react','https://cdn.pixabay.com/photo/2017/06/29/01/22/mindfulness-2455749_960_720.jpg'),(3,'SmartRun','Una aplicación móvil que te ayuda a entrenar de manera inteligente para carreras de larga distancia, ajustando tus entrenamientos en función de tu progreso y condiciones climáticas.','Entrena más inteligente, corre más lejos','https://github.com/Adalab/project-promo-s-module-4-team-1 ','http://beta.adalab.es/project-promo-s-module-3-team-1/','react','https://cdn.pixabay.com/photo/2017/08/06/22/01/jogging-2592025_960_720.jpg'),(4,'VirtualVet',' Una plataforma en línea que te permite conectarte con un veterinario en línea para recibir consejos, diagnósticos y recetas para tu mascota.','Cuida a tus mascotas, desde la comodidad de tu hogar','https://github.com/Adalab/project-promo-s-module-4-team-1 ','http://beta.adalab.es/project-promo-s-module-3-team-1/','react','https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559_960_720.jpg');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-28 13:43:57
