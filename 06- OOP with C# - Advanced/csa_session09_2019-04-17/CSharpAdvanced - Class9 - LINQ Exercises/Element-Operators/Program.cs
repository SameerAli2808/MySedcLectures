using System.Collections.Generic;
using from;
using System.Linq;
using System;

namespace Element_Operators
{
    class Program
    {
        static void Main(string[] args)
        {
            //Load all the Products, Customers, Orders
            List<Product> products = Product.GetAllProducts();
            List<Customer> customers = Customer.GetAllCustomers();
            List<Order> orders = Order.GetAllOrders();

            //Using SQL-like expression find the first Product with ProductID equals to 12 and more than 2 Units in Stock

            var firstProducEqu12More2 = (from p in products
                                         where p.ProductID == 12 && p.UnitsInStock > 2
                                         select p).FirstOrDefault();

            Product.PrintOneProduct(firstProducEqu12More2);

            //Find all Products with more than 10 Units on Order and print the second one with more than 30 Units in Stock

            var productsMore10Units = (from p in products
                                       where p.UnitsOnOrder > 10
                                       select p).Take(2).Skip(1).FirstOrDefault();

            Product.PrintOneProduct(productsMore10Units);

            //Using LINQ ElementAt method retrieve the second number greater than 5 from an array (both LAMBDA/SQL approach)
            int[] numbers = { 5, 4, 1, 2, 3, 6, 8, 7, 9, 0 };

            var secondNumber5Sql = (from n in numbers
                                    where n > 5
                                    select n).ElementAt(1);

            var secondNumber5Linq = numbers.Where(n => n > 5).ElementAt(1);

            Console.WriteLine("Second number greater than 5, SQL:: {0} ### Linq:: {1}", secondNumber5Sql, secondNumber5Linq);


            Console.ReadLine();
        }
    }
}