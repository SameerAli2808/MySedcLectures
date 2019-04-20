using System.Collections.Generic;
using from;
using System.Linq;
using System;
using System.Globalization;

namespace Aggregate_Operators
{
    class Program
    {
        static void Main(string[] args)
        {
            //Load all the Products, Customers, Orders
            List<Product> products = Product.GetAllProducts();
            List<Customer> customers = Customer.GetAllCustomers();
            List<Order> orders = Order.GetAllOrders();

            //Find all orders by Customer ID and print information for the number of each
            var ordersByCustomerID = orders.GroupBy(o => o.CustomerID)
                .Select(o => new { Customer = o.Key, Count = o.Count() })
                .ToList();

            foreach (var group in ordersByCustomerID)
            {
                Console.Write("Customer: {0} Count: {1}", group.Customer, group.Count);
                Console.WriteLine("");
            }

            //Print the count and total Freight of all orders with 'VINET' Customer ID

            //Console.WriteLine("10.00", CultureInfo.InvariantCulture);

            var VinetCount = orders.Where(o => o.CustomerID == "VINET").Count();
            var VientFright = orders.Where(o => o.CustomerID == "VINET").Select(o => o.Freight).Sum();
            Console.Write("Count: {0} Fright: {1}", VinetCount, VientFright);
            Console.WriteLine("");

            //Print the order with 'VINET' Customer ID identified by the minimal Freight 

            var VientMinFright = orders.Where(o => o.CustomerID == "VINET")
                .Select(o => o.Freight).Min();
            Console.WriteLine("Vint's Minimum Freight: {0} ", VientMinFright);

            //Print all orders per different Ship Country identified by the maximum Freight 

            var orderPerCountryMax = orders.GroupBy(o => o.ShipCountry)
                .Select(o => new {Country = o.Key, Max = o.Max(g => g.Freight) });
            foreach (var item in orderPerCountryMax)
            {
                Console.WriteLine("Country: {0} ### Max Freight: {1}", item.Country, item.Max);
            }

            //Print the average Freight (with two decimals) for all orders

            var averageFreigth = orders.Average(o => o.Freight);
            //String.Format("{0:0.00}", 123.4567);
            Console.WriteLine("Average of all freights: {0:0.00} ", averageFreigth);

            Console.ReadLine();
        }
    }
}