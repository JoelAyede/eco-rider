INSERT INTO `ride` (`driverId`, `startPoint`, `endPoint`, `date`, `price`, `seats`, `taken`) VALUES
(FLOOR(1 + (RAND() * (SELECT MAX(id) FROM user))), 'Barumbu', 'Gombe', '2025-03-01 10:00:00', 10.0, 3, 0),
(2, 'Bumbu', 'Kalamu', '2025-03-02 11:00:00', 15.0, 2, 0),
(1, 'Gombe', 'Kasa-Vubu', '2025-03-03 12:00:00', 20.0, 4, 0),
(2, 'Kalamu', 'Kimbanseke', '2025-03-04 13:00:00', 25.0, 1, 0),
(1, 'Kasa-Vubu', 'Kinshasa', '2025-03-05 14:00:00', 30.0, 3, 0),
(2, 'Kimbanseke', 'Kintambo', '2025-03-06 15:00:00', 35.0, 2, 0),
(1, 'Kinshasa', 'Lemba', '2025-03-07 16:00:00', 40.0, 4, 0),
(2, 'Kintambo', 'Limete', '2025-03-08 17:00:00', 45.0, 1, 0),
(2, 'Lemba', 'Lingwala', '2025-03-09 18:00:00', 50.0, 3, 0),
(1, 'Limete', 'Makala', '2025-03-10 19:00:00', 55.0, 2, 0),
(1, 'Lingwala', 'Maluku', '2025-03-11 20:00:00', 60.0, 4, 0),
(2, 'Makala', 'Masina', '2025-03-12 21:00:00', 65.0, 1, 0),
(1, 'Maluku', 'Matete', '2025-03-13 22:00:00', 70.0, 3, 0),
(1, 'Masina', 'Mont Ngafula', '2025-03-14 23:00:00', 75.0, 2, 0),
(1, 'Matete', 'Ndjili', '2025-03-15 00:00:00', 80.0, 4, 0),
(1, 'Mont Ngafula', 'Ngaba', '2025-03-16 01:00:00', 85.0, 1, 0),
(2, 'Ndjili', 'Ngaliema', '2025-03-17 02:00:00', 90.0, 3, 0),
(1, 'Ngaba', 'Ngiri-Ngiri', '2025-03-18 03:00:00', 95.0, 2, 0),
(1, 'Ngaliema', 'Nsele', '2025-03-19 04:00:00', 100.0, 4, 0),
(2, 'Ngiri-Ngiri', 'Selembao', '2025-03-20 05:00:00', 105.0, 1, 0),
(1, 'Nsele', 'Barumbu', '2025-03-21 06:00:00', 110.0, 3, 0),
(2, 'Selembao', 'Bumbu', '2025-03-22 07:00:00', 115.0, 2, 0),
(2, 'Barumbu', 'Gombe', '2025-03-23 08:00:00', 120.0, 4, 0),
(1, 'Bumbu', 'Kalamu', '2025-03-24 09:00:00', 125.0, 1, 0),
(2, 'Gombe', 'Kasa-Vubu', '2025-03-25 10:00:00', 130.0, 3, 0),
(1, 'Kalamu', 'Kimbanseke', '2025-03-26 11:00:00', 135.0, 2, 0),
(1, 'Kasa-Vubu', 'Kinshasa', '2025-03-27 12:00:00', 140.0, 4, 0),
(1, 'Kimbanseke', 'Kintambo', '2025-03-28 13:00:00', 145.0, 1, 0),
(1, 'Kinshasa', 'Lemba', '2025-03-29 14:00:00', 150.0, 3, 0),
(2, 'Kintambo', 'Limete', '2025-03-30 15:00:00', 155.0, 2, 0),
(1, 'Lemba', 'Lingwala', '2025-03-31 16:00:00', 160.0, 4, 0),
(2, 'Limete', 'Makala', '2025-04-01 17:00:00', 165.0, 1, 0),
(2, 'Lingwala', 'Maluku', '2025-04-02 18:00:00', 170.0, 3, 0),
(2, 'Makala', 'Masina', '2025-04-03 19:00:00', 175.0, 2, 0),
(1, 'Maluku', 'Matete', '2025-04-04 20:00:00', 180.0, 4, 0),
(2, 'Masina', 'Mont Ngafula', '2025-04-05 21:00:00', 185.0, 1, 0),
(1, 'Matete', 'Ndjili', '2025-04-06 22:00:00', 190.0, 3, 0),
(2, 'Mont Ngafula', 'Ngaba', '2025-04-07 23:00:00', 195.0, 2, 0),
(2, 'Ndjili', 'Ngaliema', '2025-04-08 00:00:00', 200.0, 4, 0),
(2, 'Ngaba', 'Ngiri-Ngiri', '2025-04-09 01:00:00', 205.0, 1, 0),
(1, 'Ngaliema', 'Nsele', '2025-04-10 02:00:00', 210.0, 3, 0),
(1, 'Ngiri-Ngiri', 'Selembao', '2025-04-11 03:00:00', 215.0, 2, 0),
(2, 'Nsele', 'Barumbu', '2025-04-12 04:00:00', 220.0, 4, 0),
(1, 'Selembao', 'Bumbu', '2025-04-13 05:00:00', 225.0, 1, 0),
(2, 'Barumbu', 'Gombe', '2025-04-14 06:00:00', 230.0, 3, 0),
(1, 'Bumbu', 'Kalamu', '2025-04-15 07:00:00', 235.0, 2, 0),
(2, 'Gombe', 'Kasa-Vubu', '2025-04-16 08:00:00', 240.0, 4, 0),
(1, 'Kalamu', 'Kimbanseke', '2025-04-17 09:00:00', 245.0, 1, 0),
(2, 'Kasa-Vubu', 'Kinshasa', '2025-04-18 10:00:00', 250.0, 3, 0),
(2, 'Kimbanseke', 'Kintambo', '2025-04-19 11:00:00', 255.0, 2, 0);