CREATE PROCEDURE Test_Default (@First as int = 0, @second as int = 1)
AS
BEGIN
	PRINT 'First'
	PRINT @First
	PRINT 'Second'
	PRINT @Second
END
GO

-- Different ways of executing the procedure
EXEC Test_Default
EXEC Test_Default @First = 1
EXEC Test_Default @Second = 10
EXEC Test_Default 10, 20
EXEC Test_Default @Second = 50, @First = 20
GO

------------------------------------------------
CREATE PROCEDURE CreateOrder (@Date as date, @Status as int = 0, @BusinessEntityId int, @CustomerId int, @EmployeeId int,
	@TotalPrice decimal(18,2), @Comment nvarchar(max) = '')
AS
BEGIN
	INSERT INTO [dbo].[Order] ([OrderDate], [Status], [BusinessEntityId], [CustomerId], [EmployeeId], [TotalPrice], [Comment])
	VALUES (@Date, @Status, @BusinessEntityId, @CustomerId, @EmployeeId, @TotalPrice, @Comment)
	
	SELECT count(*) as TotalOrdersByCustomer
	FROM dbo.[Order]
	where [CustomerId] = @CustomerId

	select count(*) as TotalOrdersByCustomerAndBE
	FROM dbo.[Order]
	where [CustomerId] = @CustomerId AND [BusinessEntityId] = @BusinessEntityId

END
GO

-- Test
declare @Date date= getdate() -- Becuse we can not use getdate inside the exec ... wee can use the samething with all variables
exec dbo.CreateOrder 
 @Date,
 @BusinessEntityId  = 1,
 @CustomerId = 1,
 @EmployeeId = 1,
 @TotalPrice = 123546
GO
 --SELECT * FROM [Order]

 alter table OrderDetails with nocheck 
 add constraint FK_OrderDetails_ProductId FOREIGN KEY (ProductId) REFERENCES Product(Id)
 GO


-------------------------------------------------------
ALTER PROCEDURE CreateOrderDetails (@OrderId as bigint, @ProductId as int = 0, @Quantity int)
AS
BEGIN
BEGIN TRY
	DECLARE @Price decimal(18,2)
	SET @Price = (
	SELECT [Price] FROM [dbo].[Product]
	WHERE [Id] = @ProductId)

	IF (SELECT COUNT(*) FROM dbo.OrderDetails WHERE OrderId = @OrderId AND ProductId = @ProductId) = 0
		BEGIN
			INSERT INTO [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [Price])
			VALUES (@OrderId, @ProductId, @Quantity, @Price)
		END
	ELSE
		BEGIN
			UPDATE dbo.OrderDetails
			SET Quantity = Quantity + @Quantity
			WHERE OrderId = @OrderId AND ProductId = @ProductId
		END

	UPDATE [dbo].[Order]
	SET TotalPrice = (SELECT SUM(Quantity * Price) FROM dbo.[OrderDetails] WHERE OrderId = @OrderId)
	WHERE id = @OrderId;
END TRY
BEGIN CATCH
	SELECT  
    ERROR_NUMBER() AS ErrorNumber  
    ,ERROR_SEVERITY() AS ErrorSeverity  
    ,ERROR_STATE() AS ErrorState  
    ,ERROR_PROCEDURE() AS ErrorProcedure  
    ,ERROR_LINE() AS ErrorLine  
    ,ERROR_MESSAGE() AS ErrorMessage;  
END CATCH
END
GO

-- Test
exec dbo.CreateOrderDetails 
 @OrderId = 4205,
 @ProductId  = 42,
 @Quantity = -5

 SELECT * FROM dbo.[Order] WHERE id = 4205
 SELECT * FROM dbo.[OrderDetails] WHERE OrderId = 4205

 SELECT * FROM dbo.Product
