Declare @FirstName NVARCHAR(50)
SET @FirstName = 'Ana'
select @FirstName

SELECT Id, FirstName
FROM dbo.Employee
WHERE FirstName = @FirstName
GO

DECLARE @EmployeeDOB TABLE
(Id int, DateOfBirth date)

INSERT INTO @EmployeeDOB
SELECT id, DateOfBirth FROM dbo.Employee
WHERE Gender = 'F'

SELECT * FROM @EmployeeDOB
GO

CREATE TABLE #EmployeeHireDat
(LastName NVARCHAR(100), HireDate DATE)

INSERT INTO #EmployeeHireDat
SELECT LastName, HireDate FROM dbo.Employee
WHERE Gender = 'M' AND FirstName LIKE 'A%'

SELECT LastName
FROM #EmployeeHireDat
WHERE LEN(LastName) = 7
GO

CREATE FUNCTION dbo.fn_FormatProductName (@ProductId int)
RETURNS NVARCHAR(2000)
AS
BEGIN
DECLARE @Result NVARCHAR(2000)
SELECT @Result = SUBSTRING(p.Code,2,2) + N'-' + RIGHT(p.Name,3) + N'-' + CAST(p.Price AS nvarchar(50))
FROM dbo.Product p​
WHERE Id = @ProductID​
RETURN @Result​
END​

SELECT *, dbo.fn_FormatProductName(Id) AS FormatName
FROM dbo.Product 
GO



DROP FUNCTION IF EXISTS dbo.fn_OrdersPerCustomer;
GO

CREATE FUNCTION dbo.fn_OrdersPerCustomer (@BusinessEntityId int,@CustomerId int)
RETURNS @output TABLE (ProducName nvarchar(100),TotalQuantity int, TotalPrice decimal(18,9))
AS
BEGIN


INSERT INTO @output
select p.Name as ProductName, sum(d.Quantity) as TotalQuantity, sum(d.Quantity*d.Price) as TotalPrice
from dbo.[Order] o
inner join dbo.OrderDetails d on o.Id = d.OrderId
inner join dbo.Product p on p.id = d.ProductId
where o.BusinessEntityId = @BusinessEntityId
and o.CustomerId = @CustomerId
group by  p.name
ORDER BY TotalQuantity


RETURN 
END

GO

-- Execution

declare @BusinessEntityId int = 1
declare @CustomerId int = 64

select * from dbo.fn_OrdersPerCustomer (@BusinessEntityId,@CustomerId)










