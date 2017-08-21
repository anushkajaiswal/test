-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2017 at 12:13 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.0.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `place` varchar(20) NOT NULL,
  `animal` varchar(20) NOT NULL,
  `thing` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `name`, `place`, `animal`, `thing`) VALUES
(1, 'Arnab', 'hyderabad', 'owl', 'pen'),
(2, 'Harsh', 'Delhi', 'Cat', 'Fan'),
(3, 'Sita', 'Ranchi', 'Dog', 'Plate'),
(4, 'Vasundhara', 'Gwalior', 'Bear', 'Pen'),
(5, 'Madhav', 'Ranchi', 'Penguin', 'Chocolate'),
(6, 'Sameer', 'Dehradun', 'Hen', 'Egg'),
(7, 'David', 'Pune', 'Tiger', 'Glass'),
(8, 'Radhika', 'Madhuban', 'Cow', 'Jwelery'),
(9, 'Romesh', 'Noida', 'Wolf', 'Crown'),
(11, 'Elina', 'Italy', 'Bufallo', 'Stove'),
(12, 'Pritam', 'Kolkata', 'Pig', 'Pencil'),
(13, 'Samar', 'Rajasthan', 'Camel', 'Bells'),
(14, 'Dhruv', 'Shirdi', 'Bull', 'Flower'),
(15, 'Pratik', 'Bhubaneswar', 'Cheetah', 'Tube'),
(16, 'Klaus', 'Newyork', 'Zebra', 'Phone'),
(17, 'Shreya', 'Patna', 'Panda', 'Dress'),
(18, 'Manthan', 'Bangalore', 'Ant', 'Suit'),
(19, 'Pooja', 'Koraput', 'Horse', 'Ball'),
(20, 'Ramesh', 'Mumbai', 'Elephant', 'Box'),
(21, 'Sia', '	London', 'Yak', 'Tube'),
(22, 'Miley', 'Washington', 'Hippo', 'Jacket'),
(23, 'Purav', 'Jamshedpur', 'Baboon', 'Eraser'),
(24, 'Rahul', 'Lonavala', 'Owl', 'Guitar'),
(25, 'Anjali', 'Panchgani', 'Beaver', 'Leggings'),
(26, 'Animesh', 'Mahabaleshwar', 'Bat', 'Sitar'),
(27, 'Tina', 'Los Angeles', 'Polar Bear', 'Car'),
(28, 'Hardeep', 'Chandigarh', 'Ox', 'Cart'),
(29, 'Junesha', 'Gujrat', 'Goat', 'Pin'),
(30, 'Shubham', 'Ahemdabad', 'Vulture', 'Thread'),
(31, 'Gita', 'Rourkela', 'Barb', 'Train'),
(33, 'Radha', 'Uttrakhand', 'Kangaroo', 'Mouse'),
(34, 'Pradyut', 'Hyderabad', 'Goose', 'Sharpner'),
(35, 'shrishti', 'Agra', 'Hyena', 'Water'),
(36, 'Samantha', 'Salem', 'Peacock', 'Bangles'),
(46, 'Sidhartha', 'Hyderabad', 'Tortoise', 'Food');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
