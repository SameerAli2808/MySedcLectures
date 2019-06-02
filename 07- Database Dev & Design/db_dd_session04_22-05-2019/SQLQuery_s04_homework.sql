/* ----------------------------------
	Homework requirement 1/3
-----------------------------------*/

/* Declare scalar variable for storing FirstName values
-- Assign value ‘Antonio’ to the FirstName variable
-- Find all Students having FirstName same as the variable */
DECLARE @FirstName NVARCHAR(100)
SET @FirstName = 'Antonio'
SELECT [FirstName]
FROM [dbo].[Student]
WHERE [FirstName] = @FirstName
Go

/* Declare table variable that will contain StudentId, StudentName and DateOfBirth
-- Fill the table variable with all Female students */
DECLARE @StudentInfo TABLE
(Id int, StudentName nvarchar(50),  DateOfBirth date)
INSERT INTO @StudentInfo
SELECT id, FirstName, DateOfBirth FROM dbo.Student
WHERE Gender = 'F'
SELECT * FROM @StudentInfo
GO

/* Declare temp table that will contain LastName and EnrolledDate columns
-- Fill the temp table with all Male students having First Name starting with ‘A’
-- Retrieve the students from the table which last name is with 7 characters */
CREATE TABLE #StudentsEnrolledDate
(LastName NVARCHAR(100), EnrolledDate DATE)
INSERT INTO #StudentsEnrolledDate
SELECT LastName, EnrolledDate FROM dbo.Student
WHERE FirstName LIKE 'A%'
SELECT LastName
FROM #StudentsEnrolledDate
WHERE LEN(LastName) = 7
GO

/* Find all teachers whose FirstName length is less than 5 and
-- the first 3 characters of their FirstName and LastName are the same */
SELECT *
FROM [dbo].[Teacher]
WHERE LEN([FirstName]) < 5 AND LEFT(FirstName, 3) = LEFT(LastName,3)
GO

/* ----------------------------------
	Homework requirement 2/3
-----------------------------------*/

/* Declare scalar function (fn_FormatStudentName) for retrieving the Student description for specific StudentId
 in the following format:
-- StudentCardNumber without “sc-”
-- “ – “
-- First character of student FirstName
-- “.”
-- Student LastName */

Alter FUNCTION dbo.fn_fn_FormatStudentName (@StudentId int)
RETURNS NVARCHAR(2000)
AS
BEGIN
DECLARE @Result NVARCHAR(2000)
SELECT @Result = SUBSTRING(s.StudentCardNumber,4,50) + N' - ' + LEFT(s.FirstName,1) + N'.' + s.LastName
FROM dbo.Student s​
WHERE Id = @StudentId​
RETURN @Result​
END​

SELECT *, dbo.fn_fn_FormatStudentName(Id) AS FormatName
FROM dbo.Student 
GO

/* ----------------------------------
	Homework requirement 3/3
-----------------------------------*/

/* Create table value function that for specific Teacher and Course will return list of students
 (FirstName, LastName) who passed the exam, together with Grade and CreatedDate */

DROP FUNCTION IF EXISTS dbo.fn_TeacherAndCourse;
GO

CREATE FUNCTION dbo.fn_TeacherAndCourse (@TeacherId int, @CourseId int)
RETURNS @output TABLE (FirstName nvarchar(100), LastName nvarchar(100), Grade int, CreatedDate Date)
AS
BEGIN

INSERT INTO @output
select s.FirstName, s.LastName, g.Grade, g.CreatedDate
from dbo.Grade g
inner join dbo.Teacher t on t.Id = g.TeacherId
inner join dbo.Student s on s.Id = g.StudentId
where g.TeacherId = @TeacherId
and g.CourseId = @CourseId
group by s.FirstName, s.LastName, g.Grade, g.CreatedDate
ORDER BY s.FirstName 
RETURN 
END
GO

-- Execution

declare @TeacherId int = 1
declare @CourseId int = 1

select * from dbo.fn_TeacherAndCourse (@TeacherId, @CourseId)
