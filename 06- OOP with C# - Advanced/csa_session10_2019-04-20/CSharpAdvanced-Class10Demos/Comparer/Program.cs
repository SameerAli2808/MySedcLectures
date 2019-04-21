using System.Collections.Generic;
using System;

namespace Comparer
{
    class Program
    {
        static void Main(string[] args)
        {
            //Homework - Add Comparers by Name and Price
            //Add additional properties and implement appropriate comparers with IComparer<T> interface

            var products = new List<Product>()
            {
                new Product("HDD", 100, 20.50,"Macedonia"),
                new Product("HDD", 10, 12.70,"Iraq"),
                new Product("CPU", 20, 11.50,"USA")
            };

            products.Sort(new ProductCountryComparer());

            foreach (var item in products)
            {
                Console.WriteLine(item.Country);
            }

            products.Sort(new ProductQuantityComparer());

            foreach (var item in products)
            {
                Console.WriteLine("{0} {1}", item.Quantity, item.Country);
            }

            products.Sort(new ProductPriceComparer());

            foreach (var item in products)
            {
                Console.WriteLine("{0} {1}", item.Price, item.Country);
            }

            products.Sort(new ProductNameComperer());

            foreach (var item in products)
            {
                Console.WriteLine("{0} {1} {2}", item.Name, item.Price, item.Country);
            }

            System.Console.ReadLine();
        }
    }
}