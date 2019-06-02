/*-------------------------------------------------------
Homework requirement 1/3​
---------------------------------------------------------*/
--Calculate the count of all grades in the system​
SELECT COUNT (g.[Grade]) AS NumberOFGreads
FROM [dbo].[Grade] g
GO

--Calculate the count of all grades per Teacher in the system​
SELECT g.[TeacherID], COUNT(g.[Grade]) AS NumberOfGrades
FROM [dbo].[Grade] g
GROUP BY g.[TeacherID]
GO

--Calculate the count of all grades per Teacher in the system for first 100 Students (ID < 100)​
SELECT g.[TeacherID], COUNT(g.[Grade]) AS NumberOfGrades
FROM [dbo].[Grade] g
WHERE g.StudentID < 100
GROUP BY g.[TeacherID]
GO

--Find the Maximal Grade, and the Average Grade per Student on all grades in the system​
SELECT g.[StudentID], MAX(g.[Grade]) AS MaximulGrades, AVG(g.[Grade]) AS AvarageGrade
FROM [dbo].[Grade] g
GROUP BY g.[StudentID]
GO

/*-------------------------------------------------------
Homework requirement 2/3​
---------------------------------------------------------*/
--Calculate the count of all grades per Teacher in the system and filter only grade count greater then 200​
SELECT g.[TeacherID], COUNT(g.[Grade]) AS NumberOfGrades
FROM [dbo].[Grade] g
GROUP BY g.[TeacherID]
HAVING COUNT(g.[Grade]) > 200
GO

--Calculate the count of all grades per Teacher in the system for first 100 Students (ID < 100) and filter teachers with more than 50 Grade count​
SELECT g.[TeacherID], COUNT(g.[Grade]) AS NumberOfGrades
FROM [dbo].[Grade] g
WHERE g.StudentID < 100
GROUP BY g.[TeacherID]
HAVING COUNT(g.[Grade]) > 50
GO

--Find the Grade Count, Maximal Grade, and the Average Grade per Student on all grades in the system. Filter only records where Maximal Grade is equal to Average Grade​
--List Student First Name and Last Name next to the other details from previous query​









