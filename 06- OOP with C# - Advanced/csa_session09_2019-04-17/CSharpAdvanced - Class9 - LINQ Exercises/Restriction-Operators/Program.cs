﻿using System;
using System.Collections.Generic;
using System.Linq;
using from;

namespace Restriction_Operators
{
    class Program
    {
        static void Main(string[] args)
        {

            //Load all the Products, Customers, Orders
            List<Product> products = Product.GetAllProducts();
            List<Customer> customers = Customer.GetAllCustomers();
            List<Order> orders = Order.GetAllOrders();

            Action line = () => Console.WriteLine();

            //Find all products that are out of stock
            //Both Lambda/SQL approach

            //Find all products that are in stock and cost more than 3.00 per unit
            //Both Lambda/SQL approach


            /*
                     Try to understand the following scenario

                     This sample uses where to find all customers in Berlin and then uses 
                     the resulting sequence to drill down into their orders.
            */

            var berlinCustomers = from c in customers
                                  where c.City == "Berlin"
                                  select c;
            Console.WriteLine("Customers from Berlin and their orders:");
            foreach (var cust in berlinCustomers)
            {
                Console.WriteLine("Customer {0}: {1}", cust.CustomerID, cust.CompanyName);
                var custOrders = from o in orders
                                 where o.CustomerID == cust.CustomerID
                                 select o;
                Order.PrintOrders(custOrders);
            }

            line();

            var berlinCustomers2 = customers.Where(c => c.City == "Berlin");
            Console.WriteLine("Customers from Berlin and their orders:");
            foreach (var cust in berlinCustomers2)
            {
                Console.WriteLine("Customer {0}: {1}", cust.CustomerID, cust.CompanyName);
                var custOrders = orders.Where(o => o.CustomerID == cust.CustomerID);

                Order.PrintOrders(custOrders);
            }
        }
    }
}
