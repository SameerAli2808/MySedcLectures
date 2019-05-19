
select Name from dbo.BusinessEntity
union 
select Name from dbo.Customer

select Name from dbo.BusinessEntity
union 
select Name from dbo.BusinessEntity

select Name from dbo.BusinessEntity
union all
select Name from dbo.BusinessEntity


select FirstName, LastName 
from dbo.Employee
where FirstName = 'Aleksandar'
intersect 
select FirstName, LastName 
from dbo.Employee
where LastName = 'Nikolovski'


------------------

select *
from dbo.[Order] o

select *
from dbo.[Order] o
left join dbo.BusinessEntity b on b.Id = o.BusinessEntityId 

select *
from dbo.[Order] o
right join dbo.BusinessEntity b on b.Id = o.BusinessEntityId and o.BusinessEntityID=1

select *
from dbo.[Order] o
left join dbo.BusinessEntity b on b.Id = o.BusinessEntityId and o.BusinessEntityID=1
left join dbo.Customer c on c.Id = o.CustomerId

select * 
from dbo.BusinessEntity b
left join dbo.[Order] o on b.Id = o.BusinessEntityId and o.BusinessEntityId=1

------------------

select * from Customer

select * from [order] 
where businessEntityID=1

select *
from dbo.[Order] o
left join dbo.BusinessEntity b on b.Id = o.BusinessEntityId

select *
from dbo.[Order] o
left join dbo.BusinessEntity b on b.Id = o.BusinessEntityId
left join dbo.Customer c on c.Id = o.CustomerId

select b.Name as BEName, c.Name as CustomerName, e.FirstName+' '+e.LastName as FullName, 
	o.TotalPrice, o.OrderDate, o.Comment
from dbo.[Order] o
left join dbo.BusinessEntity b on b.Id = o.BusinessEntityId
left join dbo.Customer c on c.Id = o.CustomerId
left join dbo.Employee e on e.Id = o.EmployeeId
--where businessEntityID=1
