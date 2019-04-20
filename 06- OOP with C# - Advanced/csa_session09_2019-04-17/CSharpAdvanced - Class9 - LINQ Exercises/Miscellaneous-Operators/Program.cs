using from;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Miscellaneous_Operators
{
    class Program
    {
        static void Main(string[] args)
        {
            //Load all the Products, Customers, Orders
            List<Product> products = Product.GetAllProducts();
            List<Customer> customers = Customer.GetAllCustomers();
            List<Order> orders = Order.GetAllOrders();

            //Using LINQ Concat method create one sequence that contains each array's values, one after the other.
            int[] numsA = { 0, 2, 4, 5, 6, 8, 9 };
            int[] numsB = { 1, 3, 5, 7, 8 };

            var concatArrays = numsA.Concat(numsB);

            foreach (var item in concatArrays)
            {
                Console.WriteLine(item);
            }

            // Concat to create one sequence that contains the names of all customers and products, including any duplicates.

            var allCustomersNames = customers.Select(c => c.ContactName);
            var allProductsNames = products.Select(p => p.ProductName);
            var allCustomersAndOrdersNames = allCustomersNames.Concat(allProductsNames);

            foreach (var item in allCustomersAndOrdersNames)
            {
                Console.WriteLine(item);
            }

            //Using LINQ EqualAll method check if two sequences match on all elements in the same order.
            var wordsA = new string[] { "cherry", "apple", "blueberry" };
            var wordsB = new string[] { "cherry", "apple", "blueberry" };

            var isSequMatch = wordsA.SequenceEqual(wordsB);

            if (isSequMatch)
            {
                Console.WriteLine("All sequence of elements matchs!");
            }
            else
            {
                Console.WriteLine("Element's sequence doesn't match!");
            }

            Console.ReadLine();
        }
    }
}