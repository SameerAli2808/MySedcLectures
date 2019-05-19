/*
Find all Employees with FirstName = Aleksandar ordered by Last Name
List all Employees ordered by FirstName
Find all Male employees ordered by HireDate, starting from the last hired

*/

SELECT * 
FROM Employee
WHERE FirstName = 'Aleksandar'
Order by LastName
GO

SELECT * 
FROM Employee
Order by LastName 
GO


SELECT * 
FROM Employee
WHERE Gender = 'M'
ORDER by HireDate desc
GO

SELECT FirstName,LastName 
FROM Employee
UNION
SELECT Name, RegionName
FROM Customer

SELECT FirstName,LastName 
FROM Employee
WHERE FirstName = 'Aleksandar'
INTERSECT 
SELECT FirstName,LastName 
FROM Employee
WHERE LastName = 'Nikolovski'

