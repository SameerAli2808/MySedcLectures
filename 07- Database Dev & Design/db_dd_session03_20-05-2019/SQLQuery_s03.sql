SELECT 'All BEs' as [Name],
SUM (o.[TotalPrice])
FROM [dbo].[Order] o
INNER JOIN [dbo].[BusinessEntity] b ON b.[Id] = o.[BusinessEntityId]
GO

SELECT b.[Name],
SUM (o.[TotalPrice])
FROM [dbo].[Order] o
INNER JOIN [dbo].[BusinessEntity] b ON b.[Id] = o.[BusinessEntityId]
GROUP BY b.[Name]
GO

/* This do the same as above, but without showing the real names */
SELECT o.[BusinessEntityId],
SUM (o.[TotalPrice])
FROM [dbo].[Order] o
--INNER JOIN [dbo].[BusinessEntity] b ON b.[Id] = o.[BusinessEntityId]
GROUP BY o.[BusinessEntityId]
GO

SELECT b.[Name],
SUM (o.[TotalPrice])
FROM [dbo].[Order] o
INNER JOIN [dbo].[BusinessEntity] b ON b.[Id] = o.[BusinessEntityId]
WHERE o.[CustomerId] < 20
GROUP BY b.[Name]
GO

SELECT b.[Name],
MAX (o.[TotalPrice]) AS Maximal,
AVG (o.[TotalPrice]) AS Average
FROM [dbo].[Order] o
INNER JOIN [dbo].[BusinessEntity] b ON b.[Id] = o.[BusinessEntityId]
GROUP BY b.[Name]
GO

SELECT b.[Name],
SUM (o.[TotalPrice])
FROM [dbo].[Order] o
INNER JOIN [dbo].[BusinessEntity] b ON b.[Id] = o.[BusinessEntityId]
WHERE o.[CustomerId] < 20
GROUP BY b.[Name]
HAVING SUM([TotalPrice]) > 628920
GO

SELECT b.[Name],
SUM (o.[TotalPrice])
FROM [dbo].[Order] o
INNER JOIN [dbo].[BusinessEntity] b ON b.[Id] = o.[BusinessEntityId]
GROUP BY b.[Name]
HAVING SUM([TotalPrice]) > 635558
GO

SELECT b.[Name],
SUM (o.[TotalPrice])
FROM [dbo].[Order] o
INNER JOIN [dbo].[BusinessEntity] b ON b.[Id] = o.[BusinessEntityId]
WHERE o.[CustomerId] < 20
GROUP BY b.[Name]
HAVING SUM([TotalPrice]) < 100000
GO

SELECT b.[Name],
MAX (o.[TotalPrice]) AS Maximal,
AVG (o.[TotalPrice]) AS Average
FROM [dbo].[Order] o
INNER JOIN [dbo].[BusinessEntity] b ON b.[Id] = o.[BusinessEntityId]
GROUP BY b.[Name]
HAVING SUM(o.[TotalPrice]) > 4 * AVG(o.[TotalPrice])
GO

CREATE VIEW MaleEmployees
AS
SELECT [Id], [FirstName], [LastName], [DateOfBirth], [HireDate], [NationalIdNumber]
FROM [dbo].[Employee]
WHERE [Gender] = 'M'
GO

SELECT [FirstName],
MIN([HireDate])
FROM MaleEmployees
--WHERE [FirstName] = 'Aleksandar'
GROUP BY [FirstName]
GO

CREATE VIEW Readable_BEs
AS
SELECT b.[Name], b.[Region], b.[Size],
SUM(o.TotalPrice) AS Total
FROM [dbo].[BusinessEntity] b
INNER JOIN [dbo].[Order] o ON b.[Id] = o.[BusinessEntityId]
GROUP BY b.[Name], b.[Region], b.[Size]
GO

SELECT * 
FROM Readable_BEs
GO

CREATE VIEW vv_CustomerOrders
AS
SELECT c.[Id], SUM(o.[TotalPrice]) AS Total
FROM [dbo].[Customer] c
INNER JOIN [dbo].[Order] o ON o.[CustomerId] = c.[Id]
GROUP BY c.[Id]
GO

SELECT *
FROM vv_CustomerOrders


GO

ALTER VIEW vv_CustomerOrders
AS
SELECT c.[Name], SUM(o.[TotalPrice]) AS Total
FROM [dbo].[Customer] c
INNER JOIN [dbo].[Order] o ON o.[CustomerId] = c.[Id]
GROUP BY c.[Name], c.[Id]
GO

ALTER VIEW vv_CustomerOrders
AS
SELECT TOP 100 PERCENT c.[Name], SUM(o.[TotalPrice]) AS Total
FROM [dbo].[Customer] c
INNER JOIN [dbo].[Order] o ON o.[CustomerId] = c.[Id]
GROUP BY c.[Name], c.[Id]
ORDER BY 2 DESC 
GO

CREATE VIEW vv_EmployeeOrders
AS
SELECT e.[FirstName]+' '+e.[LastName] AS [Employee_Name], p.[Name] AS Product, SUM(od.[Quantity]) AS Total_Quantity
FROM [dbo].[Employee] e
INNER JOIN [dbo].[Order] o ON o.[EmployeeId] = e.[Id]
INNER JOIN [dbo].[OrderDetails] od ON od.[OrderId] = o.[Id]
INNER JOIN [dbo].[Product] p ON p.[Id] = od.[ProductId]
GROUP BY e.[FirstName], e.[LastName], p.[Name]
GO

CREATE or ALTER VIEW vv_EmployeeOrders
AS
SELECT e.[FirstName]+' '+e.[LastName] AS [Employee_Name], p.[Name] AS Product, SUM(od.[Quantity]) AS Total_Quantity
FROM [dbo].[Employee] e
INNER JOIN [dbo].[Order] o ON o.[EmployeeId] = e.[Id]
INNER JOIN [dbo].[OrderDetails] od ON od.[OrderId] = o.[Id]
INNER JOIN [dbo].[Product] p ON p.[Id] = od.[ProductId]
INNER JOIN [dbo].[BusinessEntity] b ON b.[Id] = o.[BusinessEntityId]
WHERE b.[Region] = 'Skopski'
GROUP BY e.[FirstName], e.[LastName], p.[Name]
GO

SELECT * FROM vv_EmployeeOrders