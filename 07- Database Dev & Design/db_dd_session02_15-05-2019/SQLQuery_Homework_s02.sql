-------------------------------------------------------------------------------------
--Homework requirement 1/6
-------------------------------------------------------------------------------------
--Find all Students with FirstName = Antonio
SELECT * FROM [dbo].[Student]
WHERE [FirstName] = 'Antonio'

--Find all Students with DateOfBirth greater than ‘01.01.1999’
SELECT * FROM [dbo].[Student]
WHERE [DateOfBirth] > '1999-01-01'

--Find all Male students
SELECT * FROM [dbo].[Student]
WHERE [Gender] = 'M'

--Find all Students with LastName starting With ‘T’
SELECT * FROM [dbo].[Student]
WHERE [LastName] LIKE 'T%'

--Find all Students Enrolled in January/1998
SELECT * FROM [dbo].[Student]
WHERE [EnrolledDate] LIKE '1998-01%'

--Find all Students with LastName starting With ‘J’ enrolled in January/1998
SELECT * FROM [dbo].[Student]
WHERE [LastName] LIKE 'J%' AND [EnrolledDate] LIKE '1998-01%'

-------------------------------------------------------------------------------------
--Homework requirement 2/6
-------------------------------------------------------------------------------------
--Find all Students with FirstName = Antonio ordered by Last Name
SELECT * FROM [dbo].[Student]
WHERE [FirstName] = 'Antonio'
ORDER BY [LastName]

--List all Students ordered by FirstName
SELECT * FROM [dbo].[Student]
ORDER BY [FirstName], [LastName]

--Find all Male students ordered by EnrolledDate, starting from the last enrolled
SELECT * FROM [dbo].[Student]
WHERE [Gender] = 'M'
ORDER BY [EnrolledDate] DESC

-------------------------------------------------------------------------------------
--Homework requirement 3/6
-------------------------------------------------------------------------------------
--List all Teacher First Names and Student First Names in single result set with duplicates
SELECT [FirstName]
FROM [dbo].[Teacher]
UNION
SELECT [FirstName]
FROM [dbo].[Student]

--List all Teacher Last Names and Student Last Names in single result set. Remove duplicates
SELECT [LastName]
FROM [dbo].[Teacher]
INTERSECT
SELECT [LastName]
FROM [dbo].[Student]

--List all common First Names for Teachers and Students
-- First way --
SELECT [FirstName]
FROM [dbo].[Teacher]
INTERSECT
SELECT [FirstName]
FROM [dbo].[Student]
ORDER BY [FirstName]

-- Second way --
SELECT DISTINCT [FirstName]
FROM [dbo].[Student]
WHERE [FirstName] IN
(
SELECT [FirstName]
FROM [dbo].[Student]
INTERSECT
SELECT [FirstName]
FROM [dbo].[Teacher]
)
ORDER BY [FirstName]

-- Third way --
SELECT DISTINCT [FirstName]
FROM [dbo].[Student]
WHERE [FirstName] = ANY 
(
SELECT [FirstName] FROM [dbo].[Teacher]
)
ORDER BY [FirstName]

-------------------------------------------------------------------------------------
--Homework requirement 4/6
-------------------------------------------------------------------------------------
--Change GradeDetails table always to insert value 100 in AchievementMaxPoints column if no value is provided on insert
ALTER TABLE [dbo].[GradeDetails]
ADD CONSTRAINT [DF_GradeDetails_AchievementMaxPoints]
DEFAULT 100 FOR [AchievementMaxPoints]

--Change GradeDetails table to prevent inserting AchievementPoints that will (be**) more than AchievementMaxPoints
ALTER TABLE [dbo].[GradeDetails] WITH CHECK
ADD CONSTRAINT [CHK_GradeDetails_AchievementPoints]
CHECK ([AchievementPoints] <= [AchievementMaxPoints]);

--Change AchievementType table to guarantee unique names across the Achievement types
ALTER TABLE [dbo].[AchievementType] WITH CHECK
ADD CONSTRAINT [UC_AchievementType_Name] UNIQUE ([Name])

-------------------------------------------------------------------------------------
--Homework requirement 5/6
-------------------------------------------------------------------------------------
-- Note: I did it first in the daigram, then did it with coding.
-- Don't understand why there's duplicationg happend ??!!
ALTER TABLE [dbo].[Grade] 
ADD CONSTRAINT [FK_Student_ID] 
FOREIGN KEY ([StudentId]) REFERENCES [dbo].[Student]([ID]);

ALTER TABLE [dbo].[Grade] 
ADD CONSTRAINT [FK_Course_ID] 
FOREIGN KEY ([CourceId]) REFERENCES [dbo].[Course]([ID]);

ALTER TABLE [dbo].[Grade] 
ADD CONSTRAINT [FK_Teacher_ID] 
FOREIGN KEY ([TeacherID]) REFERENCES [dbo].[Teacher]([ID]);

ALTER TABLE [dbo].[GradeDetails] 
ADD CONSTRAINT [FK_Grade_ID] 
FOREIGN KEY ([GradeId]) REFERENCES [dbo].[Grade]([ID]);

ALTER TABLE [dbo].[GradeDetails] 
ADD CONSTRAINT [FK_AchievementType_ID] 
FOREIGN KEY ([AchievementTypeID]) REFERENCES [dbo].[AchievementType]([ID]);

-------------------------------------------------------------------------------------
--Homework requirement 6/6
-------------------------------------------------------------------------------------
--List all possible combinations of Courses names and AchievementType names that can be passed by student
select c.[Name] as [Course_Name], a.[Name] as [AchievementType_Name]
from [dbo].[Course] c
cross join [dbo].[AchievementType] a

--List all Teachers that has any exam Grade
-- First way --
select DISTINCT t.[FirstName]+' '+t.[LastName] as [Teacher_Name]
from [dbo].[Teacher] t
cross join [dbo].[Grade] g
WHERE t.[ID] = g.[TeacherID] AND g.[Grade] >= 0
ORDER BY [Teacher_Name]
-- Other way --
select DISTINCT t.[FirstName]+' '+t.[LastName] as [Teacher_Name]
from [dbo].[Teacher] t
left join [dbo].[Grade] g ON t.[ID] = g.[TeacherID]
WHERE g.[Grade] >= 0
ORDER BY [Teacher_Name]

--List all Teachers without exam Grade
select DISTINCT t.[FirstName]+' '+t.[LastName] as [Teacher_Name]
from [dbo].[Teacher] t
cross join [dbo].[Grade] g
WHERE t.[ID] = g.[TeacherID] AND g.[Grade] = NULL
ORDER BY [Teacher_Name]

--List all Students without exam Grade (using Right Join)
select DISTINCT s.[FirstName]+' '+s.[LastName] as [Student_Name]
from [dbo].[Student] s
right join [dbo].[Grade] g ON s.[ID] = g.[StudentID]
WHERE g.[Grade] is NULL
ORDER BY [Student_Name]


