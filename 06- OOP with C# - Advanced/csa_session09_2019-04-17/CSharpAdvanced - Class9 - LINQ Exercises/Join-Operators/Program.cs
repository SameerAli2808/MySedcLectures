using System.Collections.Generic;
using from;
using System.Linq;
using System;

namespace Join_Operators
{
    class Program
    {
        
        static void Main(string[] args)
        {
            //Load all the Products, Customers, Orders
            List<Product> products = Product.GetAllProducts();
            List<Customer> customers = Customer.GetAllCustomers();
            List<Order> orders = Order.GetAllOrders();

            //Print all Customers Contact Names with 'VINET' CustomerID following with details about Order City and Freight
            //Both Lambda/SQL approach..

            var customersVinetLinq = customers.Join(orders,
                c => c.CustomerID,
                o => o.CustomerID,
                (c, o) => new { Customer = c.CustomerID, City = o.ShipCity, Freight = o.Freight, Employee = o.EmployeeID })
                .Where(c => c.Customer == "VINET");

            var customerVinetSql = (from c in customers
                                    join o in orders 
                                    on c.CustomerID equals o.CustomerID
                                    where c.CustomerID == "VINET"
                                    select new { City = o.ShipCity, Freight = o.Freight, Employee = o.EmployeeID });

            foreach (var item in customersVinetLinq)
            {
                Console.WriteLine("City: {0} ### Freight: {1} ### Employee: {2}", item.City, item.Freight, item.Employee);
            }

            foreach (var item in customerVinetSql)
            {
                Console.WriteLine("City: {0} ### Freight: {1} ### Employee: {2}", item.City, item.Freight, item.Employee);
            }

            Console.ReadLine();

        }
    }
}
