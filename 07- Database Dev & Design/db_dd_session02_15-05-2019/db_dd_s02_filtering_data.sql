SELECT * from dbo.Employee
where FirstName = 'Goran' and LastName like 'S%'

select * from dbo.Employee
where FirstName like '%a'
--order by FirstName ASC
--order by FirstName ASC, LastName ASC
order by 2 ASC

SELECT FirstName, LastName
FROM dbo.Employee
union
SELECT FirstName, LastName
FROM dbo.Employee

select Name
from dbo.BusinessEntity
union
select Name
from dbo.Customer

select Region
from dbo.BusinessEntity
union
select RegionName
from dbo.Customer

