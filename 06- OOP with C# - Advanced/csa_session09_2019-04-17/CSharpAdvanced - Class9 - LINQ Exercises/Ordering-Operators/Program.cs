using System;
using System.Linq;
using from;
using System.Collections.Generic;



namespace Ordering_Operators
{
    class Program
    {
        static void Main(string[] args)
        {
            //Load all the Products, Customers, Orders
            List<Product> products = Product.GetAllProducts();
            List<Customer> customers = Customer.GetAllCustomers();
            List<Order> orders = Order.GetAllOrders();

            // Sort a list of words alphabetically and print the result using Join method
            string[] words = { "cherry", "apple", "blueberry" };

            //Array.Sort(words);
            var sortedWords = words.OrderBy(w => w);

            foreach (var item in sortedWords)
            {
                Console.WriteLine(item);
            }

            //Use LINQ Order By method to sort a list of digits, first by length of their name, and then alphabetically by the name itself
            string[] digits = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };

            var digitsByLength = digits.OrderBy(d => d.Length).ThenBy(d => d).ToList();

            foreach (var item in digitsByLength)
            {
                Console.WriteLine(item);
            }

            //Use LINQ Order By method to sort a list of products, first by category and then by unit price, from highest to lowest.

            var productsByCategoryThenPrice = products.OrderBy(p => p.CategoryID).ThenByDescending(p => p.UnitPrice).ToList();

            Product.PrintProducts(productsByCategoryThenPrice);

            Console.ReadLine();
        }
    }
}