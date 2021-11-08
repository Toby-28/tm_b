-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 08, 2021 at 03:28 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tm_b`
--

-- --------------------------------------------------------

--
-- Table structure for table `ads_admin`
--

CREATE TABLE `ads_admin` (
  `id` int(6) NOT NULL,
  `tertip_nomer` int(6) NOT NULL,
  `product_id` int(11) NOT NULL,
  `ads_photo` varchar(250) NOT NULL,
  `ads_description` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ads_fromshops`
--

CREATE TABLE `ads_fromshops` (
  `id` int(11) NOT NULL,
  `tertip_nomer` int(11) NOT NULL DEFAULT 99999,
  `shop_id` int(11) NOT NULL,
  `ads_photo` varchar(250) CHARACTER SET utf8 NOT NULL,
  `payment` tinyint(1) NOT NULL DEFAULT 0,
  `product_id` int(11) NOT NULL,
  `ads_description` text NOT NULL,
  `is_product` tinyint(1) NOT NULL DEFAULT 0,
  `checked` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ads_fromshops`
--

INSERT INTO `ads_fromshops` (`id`, `tertip_nomer`, `shop_id`, `ads_photo`, `payment`, `product_id`, `ads_description`, `is_product`, `checked`) VALUES
(1, 0, 1, 'c://', 0, 1, '1', 1, 0),
(2, 0, 1, '', 1, 1, '', 0, 0),
(3, 0, 1, '', 1, 1, '', 1, 0),
(4, 0, 1, '', 1, 1, '', 1, 0),
(5, 0, 1, '', 1, 1, '', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `bolum_id` int(4) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `photo` text CHARACTER SET utf8mb4 NOT NULL,
  `service_id` int(11) NOT NULL,
  `tertip_nomer` int(4) NOT NULL,
  `product_id` int(11) NOT NULL,
  `route` varchar(250) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `banner_shop`
--

CREATE TABLE `banner_shop` (
  `id` int(6) NOT NULL,
  `shop_id` int(6) NOT NULL,
  `photo` varchar(250) NOT NULL,
  `tertip_nomer` int(4) NOT NULL,
  `service_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bolum`
--

CREATE TABLE `bolum` (
  `id` int(11) NOT NULL,
  `bolum_name` varchar(100) NOT NULL,
  `bolum_nameRU` varchar(250) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `tertip_nomer` int(4) NOT NULL DEFAULT 999,
  `visible` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bolum`
--

INSERT INTO `bolum` (`id`, `bolum_name`, `bolum_nameRU`, `photo`, `tertip_nomer`, `visible`) VALUES
(1, 'hyzmat', 'лвл', '', 4, 1),
(2, 'technique', 'валдп', 'bolum_photo_1636142414786.png', 1, 0),
(4, 'sowda', 'ывас', 'c://', 999, 0),
(5, 'egin-eşik', 'одежда', 'bolum_photo_1636098007896.png', 2, 1),
(13, 'sport', 'спорт', 'bolum_photo_1636099976040.png', 999, 0),
(14, 'kosmetika', '', 'bolum_photo_1636100041066.png', 999, 1);

-- --------------------------------------------------------

--
-- Table structure for table `bolum_shop`
--

CREATE TABLE `bolum_shop` (
  `id` int(11) NOT NULL,
  `bolum_id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `bolum_id` int(11) NOT NULL,
  `katalog_id` int(11) NOT NULL,
  `category_name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `category_nameRU` varchar(100) CHARACTER SET utf8 NOT NULL,
  `category_photo` varchar(250) CHARACTER SET utf8 NOT NULL,
  `visible` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `bolum_id`, `katalog_id`, `category_name`, `category_nameRU`, `category_photo`, `visible`) VALUES
(2, 1, 2, 'between', '', '', 1),
(3, 5, 1, 'all', '', '', 1),
(5, 5, 2, 'she', '', '', 1),
(8, 1, 2, 'weall', '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `collections`
--

CREATE TABLE `collections` (
  `id` int(6) NOT NULL,
  `collection_name` varchar(250) NOT NULL,
  `collection_nameRU` varchar(250) NOT NULL,
  `shop_id` int(10) NOT NULL,
  `collection_photo` varchar(250) NOT NULL,
  `visible` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `collection_items`
--

CREATE TABLE `collection_items` (
  `id` int(6) NOT NULL,
  `collection_id` int(6) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `follow`
--

CREATE TABLE `follow` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `follow`
--

INSERT INTO `follow` (`id`, `user_id`, `shop_id`, `service_id`) VALUES
(1, 1, 0, 1),
(2, 1, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `katalog`
--

CREATE TABLE `katalog` (
  `id` int(11) NOT NULL,
  `bolum_id` int(11) NOT NULL,
  `katalog_name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `katalog_nameRU` varchar(250) CHARACTER SET utf8 NOT NULL,
  `photo` varchar(255) CHARACTER SET utf8 NOT NULL,
  `visible` tinyint(1) NOT NULL DEFAULT 0,
  `tertip_nomer` int(4) NOT NULL DEFAULT 9999
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `katalog`
--

INSERT INTO `katalog` (`id`, `bolum_id`, `katalog_name`, `katalog_nameRU`, `photo`, `visible`, `tertip_nomer`) VALUES
(1, 5, 'snake', '', '', 1, 0),
(2, 2, 'cow', '', '', 1, 0),
(4, 2, 'chicken', '', '', 1, 0),
(5, 1, 'shark', '', '', 0, 0),
(7, 2, 'sed', '', '', 1, 0),
(8, 5, 'smartech', '', '', 1, 9999);

-- --------------------------------------------------------

--
-- Table structure for table `like_products`
--

CREATE TABLE `like_products` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `like_service`
--

CREATE TABLE `like_service` (
  `id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `bolum_id` int(11) NOT NULL,
  `katalog_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `subcategory_id` int(11) NOT NULL,
  `product_name` varchar(250) CHARACTER SET utf8 NOT NULL,
  `product_nameRU` varchar(250) CHARACTER SET utf8 NOT NULL,
  `description` text CHARACTER SET utf8 NOT NULL,
  `descriptionRU` varchar(250) NOT NULL,
  `price` double NOT NULL,
  `old_price` double NOT NULL,
  `aksiya` tinyint(1) NOT NULL,
  `aksiya_text` text CHARACTER SET utf8 NOT NULL,
  `aksiya_textRU` int(11) NOT NULL,
  `arzanladys` tinyint(4) NOT NULL,
  `garasarna` tinyint(1) NOT NULL,
  `garasarna_time` datetime NOT NULL,
  `rating_sum` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `sold` int(11) NOT NULL,
  `seen` int(11) NOT NULL,
  `likes` int(11) NOT NULL,
  `color` varchar(100) CHARACTER SET utf8 NOT NULL,
  `razmer` tinyint(1) NOT NULL,
  `count` int(11) NOT NULL,
  `limits` int(11) NOT NULL DEFAULT 20,
  `modified` datetime NOT NULL DEFAULT current_timestamp(),
  `checked` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `shop_id`, `bolum_id`, `katalog_id`, `category_id`, `subcategory_id`, `product_name`, `product_nameRU`, `description`, `descriptionRU`, `price`, `old_price`, `aksiya`, `aksiya_text`, `aksiya_textRU`, `arzanladys`, `garasarna`, `garasarna_time`, `rating_sum`, `rating`, `sold`, `seen`, `likes`, `color`, `razmer`, `count`, `limits`, `modified`, `checked`) VALUES
(1, 1, 3, 4, 7, 3, 'samsung galaxy a10', '', 'karopkasy yok, ekran calsan, on kamera hapa zaryatnik yok, SIM karta dusenok...', '', 2600, 3000, 1, 'yanynda cehol ba', 0, 13, 1, '2021-08-27 08:35:46', 1, 6, 1, 6, 1, 'dark-blue', 0, 1, 1, '2021-08-27 09:48:22', 1),
(2, 1, 2, 7, 2, 3, 'keteni', '', 'gowy', '', 1000, 1200, 0, '2x1=1', 0, 12, 0, '0000-00-00 00:00:00', 3, 30, 2, 50, 11, 'blue', 0, 30, 5, '2021-08-28 15:52:32', 0);

-- --------------------------------------------------------

--
-- Table structure for table `product_photo`
--

CREATE TABLE `product_photo` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `photo` text NOT NULL,
  `esasy` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rating_products`
--

CREATE TABLE `rating_products` (
  `id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `rating_count` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `rating_service_shops`
--

CREATE TABLE `rating_service_shops` (
  `id` int(10) NOT NULL,
  `sevice_shop_id` int(10) NOT NULL,
  `user_id` int(11) NOT NULL,
  `rating_count` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `rating_shops`
--

CREATE TABLE `rating_shops` (
  `id` int(10) NOT NULL,
  `shop_id` int(10) NOT NULL,
  `user_id` int(11) NOT NULL,
  `rating_count` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sargytlar`
--

CREATE TABLE `sargytlar` (
  `id` int(11) NOT NULL,
  `sargyt_kody` varchar(100) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_adress` varchar(250) NOT NULL,
  `user_phone` varchar(15) NOT NULL,
  `sargyt_sany` int(11) NOT NULL,
  `umumy_summa` int(11) NOT NULL,
  `wagty` date NOT NULL,
  `status` varchar(200) NOT NULL,
  `Arzanlandyrysh_summa` int(11) NOT NULL,
  `dostawka_wagty` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sargyt_produkt`
--

CREATE TABLE `sargyt_produkt` (
  `id` int(11) NOT NULL,
  `sargyt_kody` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `saylanan`
--

CREATE TABLE `saylanan` (
  `id` int(6) NOT NULL,
  `header_text` varchar(250) NOT NULL,
  `header_textRU` varchar(250) NOT NULL,
  `label_text` varchar(250) NOT NULL,
  `label_textRU` varchar(250) NOT NULL,
  `photo` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `saylanan_items`
--

CREATE TABLE `saylanan_items` (
  `id` int(6) NOT NULL,
  `saylanan_id` int(6) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sellers`
--

CREATE TABLE `sellers` (
  `id` int(10) NOT NULL,
  `login` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `type` varchar(50) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `Access` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sellers`
--

INSERT INTO `sellers` (`id`, `login`, `password`, `type`, `shop_id`, `Access`) VALUES
(1, 'sadyyan', '$2b$10$InMf8HOedcxeQ8W5qTyFnOilID9aXApYvYRqTG3fxRAdBhha7aLmG', 'sowda', 1, 1),
(2, 'jasur', '$2b$10$WhLTzGIZmfMZCufUExkTquS63qclYRjWeaQ87.9LepzmMvqpLX.fm', 'sowda', 2, 1),
(4, 'murad', '$2b$10$FNB5ciEXOw1UHrPULu3gO.SiWwDrGRXUy3Momikehpt9kDSe828by', 'hyzmat', 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `service_catalog`
--

CREATE TABLE `service_catalog` (
  `id` int(11) NOT NULL,
  `catalog_id` int(6) NOT NULL,
  `service_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `service_product`
--

CREATE TABLE `service_product` (
  `id` int(11) NOT NULL,
  `catalog_id` int(6) NOT NULL,
  `service_id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `nameRU` varchar(250) NOT NULL,
  `description` text NOT NULL,
  `descriptionRU` text NOT NULL,
  `like_num` int(11) NOT NULL,
  `rate` int(11) NOT NULL,
  `photo` text NOT NULL,
  `modified` timestamp NOT NULL DEFAULT current_timestamp(),
  `checked` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `service_shops`
--

CREATE TABLE `service_shops` (
  `id` int(11) NOT NULL,
  `service_shops_name` varchar(60) CHARACTER SET utf8mb4 NOT NULL,
  `address` text CHARACTER SET utf8mb4 NOT NULL,
  `adressRU` text NOT NULL,
  `tel` varchar(12) CHARACTER SET utf8mb4 NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `website` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `insta` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `imo` varchar(12) CHARACTER SET utf8mb4 NOT NULL,
  `photo` text CHARACTER SET utf8mb4 NOT NULL,
  `description` text CHARACTER SET utf8mb4 NOT NULL,
  `descriptionRU` text NOT NULL,
  `modified` timestamp NOT NULL DEFAULT current_timestamp(),
  `Access` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `service_shops`
--

INSERT INTO `service_shops` (`id`, `service_shops_name`, `address`, `adressRU`, `tel`, `email`, `website`, `insta`, `imo`, `photo`, `description`, `descriptionRU`, `modified`, `Access`) VALUES
(9, '', '', '', '', '', '', '', '', '', '', '', '2021-10-09 13:15:01', 0),
(10, '', '', '', '', '', '', '', '', '', '', '', '2021-10-09 13:15:12', 1),
(11, '', '', '', '', '', '', '', '', '', '', '', '2021-10-09 14:39:49', 1);

-- --------------------------------------------------------

--
-- Table structure for table `shop`
--

CREATE TABLE `shop` (
  `id` int(11) NOT NULL,
  `shop_name` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `description` text CHARACTER SET utf8mb4 NOT NULL,
  `descriptionRU` varchar(250) NOT NULL,
  `phone` varchar(12) CHARACTER SET utf8mb4 NOT NULL,
  `address` text NOT NULL,
  `adressRU` text NOT NULL,
  `photo` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `modified` timestamp NOT NULL DEFAULT current_timestamp(),
  `email` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `website` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `insta` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `imo` varchar(12) CHARACTER SET utf8mb4 NOT NULL,
  `vip` tinyint(1) DEFAULT 0,
  `Access` tinyint(1) NOT NULL DEFAULT 0,
  `owner_name` varchar(50) NOT NULL,
  `owner_familya` varchar(60) NOT NULL,
  `owner_ochestvo` varchar(60) NOT NULL,
  `owners_phone` varchar(20) NOT NULL,
  `second_phone` varchar(20) NOT NULL,
  `dostawka` tinyint(1) NOT NULL DEFAULT 0,
  `mugt_dostawka` tinyint(1) NOT NULL,
  `min_dostawka_toleg` int(6) NOT NULL DEFAULT 0,
  `dostawka_tolegi` int(4) NOT NULL,
  `gelip_almak` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `shop`
--

INSERT INTO `shop` (`id`, `shop_name`, `description`, `descriptionRU`, `phone`, `address`, `adressRU`, `photo`, `modified`, `email`, `website`, `insta`, `imo`, `vip`, `Access`, `owner_name`, `owner_familya`, `owner_ochestvo`, `owners_phone`, `second_phone`, `dostawka`, `mugt_dostawka`, `min_dostawka_toleg`, `dostawka_tolegi`, `gelip_almak`) VALUES
(1, 'gulzemin', 'Yanymyzdaky sowda merkez!', '', '+99365616320', 'Taslamada', '', 'c://', '2021-08-18 18:18:33', 'gulzemin@g.tm', 'gulzemin.com', 'serg.vfdsgw/[p2lw', 'imo adress', 1, 0, '', '', '', '63', '', 0, 0, 0, 0, 0),
(2, 'alperi', 'gowysy girme', '', '+9936xxxxxxx', 'niredir bir yer', '', 'c://', '2021-08-25 19:07:15', 'yalkym.com@g.tm', 'yalkym.com', 'insta address', 'imo address', 1, 0, '', '', '', '62', '', 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `shop_category`
--

CREATE TABLE `shop_category` (
  `id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `katalog_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shop_category`
--

INSERT INTO `shop_category` (`id`, `shop_id`, `katalog_id`, `category_id`) VALUES
(1, 2, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `shop_center`
--

CREATE TABLE `shop_center` (
  `id` int(11) NOT NULL,
  `shop_center_name` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shop_center`
--

INSERT INTO `shop_center` (`id`, `shop_center_name`, `address`, `photo`) VALUES
(1, 'sadyyan', 'mikrayon', 'c://'),
(2, 'yalkym', 'kosi', 'c://'),
(3, 'garassyzlyk', 'sdfgve', 'rtgvsrdf');

-- --------------------------------------------------------

--
-- Table structure for table `shop_katalog`
--

CREATE TABLE `shop_katalog` (
  `id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `katalog_id` int(11) NOT NULL,
  `shop_katalog_photo` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shop_katalog`
--

INSERT INTO `shop_katalog` (`id`, `shop_id`, `katalog_id`, `shop_katalog_photo`) VALUES
(2, 2, 5, '');

-- --------------------------------------------------------

--
-- Table structure for table `shop_lenta`
--

CREATE TABLE `shop_lenta` (
  `id` int(11) NOT NULL,
  `shop_id` int(10) NOT NULL,
  `description` text NOT NULL,
  `surat` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `shop_products`
--

CREATE TABLE `shop_products` (
  `id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `katalog_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `subcategory_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shop_products`
--

INSERT INTO `shop_products` (`id`, `shop_id`, `katalog_id`, `category_id`, `subcategory_id`, `product_id`) VALUES
(2, 2, 7, 8, 2, 1),
(3, 2, 7, 8, 3, 1),
(4, 2, 7, 8, 3, 1),
(5, 2, 7, 8, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `shop_subcategory`
--

CREATE TABLE `shop_subcategory` (
  `id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `katalog_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `subcategory_id` int(11) NOT NULL,
  `shop_subcategory_photo` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shop_subcategory`
--

INSERT INTO `shop_subcategory` (`id`, `shop_id`, `katalog_id`, `category_id`, `subcategory_id`, `shop_subcategory_photo`) VALUES
(1, 2, 7, 8, 3, ''),
(2, 2, 7, 8, 2, ''),
(3, 2, 7, 8, 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `exist` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `size`
--

INSERT INTO `size` (`id`, `product_id`, `size`, `exist`) VALUES
(2, 1, 15, 1);

-- --------------------------------------------------------

--
-- Table structure for table `statistic_produkt`
--

CREATE TABLE `statistic_produkt` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `statistic_shop`
--

CREATE TABLE `statistic_shop` (
  `id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `subcategory`
--

CREATE TABLE `subcategory` (
  `id` int(11) NOT NULL,
  `bolum_id` int(11) NOT NULL,
  `katalog_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `subcategory_name` varchar(100) NOT NULL,
  `subcategory_nameRU` varchar(250) NOT NULL,
  `visible` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subcategory`
--

INSERT INTO `subcategory` (`id`, `bolum_id`, `katalog_id`, `category_id`, `subcategory_name`, `subcategory_nameRU`, `visible`) VALUES
(1, 1, 2, 2, 'coca-cola', '', 1),
(2, 1, 2, 2, 'zip', '', 1),
(3, 13, 5, 8, 'malakasos', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sup_adm`
--

CREATE TABLE `sup_adm` (
  `name` varchar(15) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sup_adm`
--

INSERT INTO `sup_adm` (`name`, `password`) VALUES
('murad', '$2b$10$TEEs1sbwCSgZgx1M4X/fvONuCjvAgnanes3oMf.Fd7/cpqp8xoLxe');

-- --------------------------------------------------------

--
-- Table structure for table `teklipler`
--

CREATE TABLE `teklipler` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `teklip` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `tel` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `tel`) VALUES
(1, 'sadyyan', '+99362863012');

-- --------------------------------------------------------

--
-- Table structure for table `vip_shops`
--

CREATE TABLE `vip_shops` (
  `id` int(4) NOT NULL,
  `bolum_id` int(4) NOT NULL,
  `katalog_id` int(4) NOT NULL DEFAULT 0,
  `shop_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vip_shops`
--

INSERT INTO `vip_shops` (`id`, `bolum_id`, `katalog_id`, `shop_id`) VALUES
(1, 3, 0, 3),
(2, 3, 0, 3),
(3, 3, 0, 3),
(4, 6, 0, 6);

-- --------------------------------------------------------

--
-- Table structure for table `zurnal`
--

CREATE TABLE `zurnal` (
  `id` int(6) NOT NULL,
  `text` varchar(250) NOT NULL,
  `textRU` varchar(250) NOT NULL,
  `second_text` varchar(250) NOT NULL,
  `second_textRU` varchar(250) NOT NULL,
  `type` varchar(250) NOT NULL,
  `type_name` varchar(250) NOT NULL,
  `photo` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `zurnal_items`
--

CREATE TABLE `zurnal_items` (
  `id` int(10) NOT NULL,
  `zurnal_id` int(6) NOT NULL,
  `name` varchar(250) NOT NULL,
  `nameRU` varchar(250) NOT NULL,
  `description` text NOT NULL,
  `descriptionRU` text NOT NULL,
  `photo` varchar(250) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ads_fromshops`
--
ALTER TABLE `ads_fromshops`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `shop_id` (`shop_id`);

--
-- Indexes for table `banner_shop`
--
ALTER TABLE `banner_shop`
  ADD KEY `shop_id` (`shop_id`);

--
-- Indexes for table `bolum`
--
ALTER TABLE `bolum`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `bolum_nameRU` (`bolum_nameRU`),
  ADD UNIQUE KEY `bolum_name` (`bolum_name`) USING BTREE;

--
-- Indexes for table `bolum_shop`
--
ALTER TABLE `bolum_shop`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `collections`
--
ALTER TABLE `collections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `collection_items`
--
ALTER TABLE `collection_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `follow`
--
ALTER TABLE `follow`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `katalog`
--
ALTER TABLE `katalog`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `katalog_name` (`katalog_name`);

--
-- Indexes for table `like_products`
--
ALTER TABLE `like_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_photo`
--
ALTER TABLE `product_photo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rating_products`
--
ALTER TABLE `rating_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rating_service_shops`
--
ALTER TABLE `rating_service_shops`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rating_shops`
--
ALTER TABLE `rating_shops`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saylanan`
--
ALTER TABLE `saylanan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saylanan_items`
--
ALTER TABLE `saylanan_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sellers`
--
ALTER TABLE `sellers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`) USING BTREE,
  ADD UNIQUE KEY `shop_id` (`shop_id`);

--
-- Indexes for table `service_catalog`
--
ALTER TABLE `service_catalog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_product`
--
ALTER TABLE `service_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_shops`
--
ALTER TABLE `service_shops`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `shop_name` (`shop_name`);

--
-- Indexes for table `shop_category`
--
ALTER TABLE `shop_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shop_center`
--
ALTER TABLE `shop_center`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shop_katalog`
--
ALTER TABLE `shop_katalog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shop_lenta`
--
ALTER TABLE `shop_lenta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shop_products`
--
ALTER TABLE `shop_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shop_subcategory`
--
ALTER TABLE `shop_subcategory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subcategory`
--
ALTER TABLE `subcategory`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `subcategory_name` (`subcategory_name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vip_shops`
--
ALTER TABLE `vip_shops`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ads_fromshops`
--
ALTER TABLE `ads_fromshops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bolum`
--
ALTER TABLE `bolum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `bolum_shop`
--
ALTER TABLE `bolum_shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `collections`
--
ALTER TABLE `collections`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `collection_items`
--
ALTER TABLE `collection_items`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `follow`
--
ALTER TABLE `follow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `katalog`
--
ALTER TABLE `katalog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `like_products`
--
ALTER TABLE `like_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product_photo`
--
ALTER TABLE `product_photo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rating_products`
--
ALTER TABLE `rating_products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rating_service_shops`
--
ALTER TABLE `rating_service_shops`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rating_shops`
--
ALTER TABLE `rating_shops`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `saylanan`
--
ALTER TABLE `saylanan`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `saylanan_items`
--
ALTER TABLE `saylanan_items`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sellers`
--
ALTER TABLE `sellers`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `service_catalog`
--
ALTER TABLE `service_catalog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `service_product`
--
ALTER TABLE `service_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `service_shops`
--
ALTER TABLE `service_shops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `shop`
--
ALTER TABLE `shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `shop_category`
--
ALTER TABLE `shop_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `shop_center`
--
ALTER TABLE `shop_center`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `shop_katalog`
--
ALTER TABLE `shop_katalog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `shop_products`
--
ALTER TABLE `shop_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `shop_subcategory`
--
ALTER TABLE `shop_subcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vip_shops`
--
ALTER TABLE `vip_shops`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
