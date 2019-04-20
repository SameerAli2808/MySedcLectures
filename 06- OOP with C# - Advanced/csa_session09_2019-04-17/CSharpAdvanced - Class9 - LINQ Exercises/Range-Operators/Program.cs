using System.Linq;
using System;
using System.Collections.Generic;

namespace Range_Operators
{
    class Program
    {
        static void Main(string[] args)
        {

            //Find all odd two-digit numbers that divides 7
            //Take a look in Enumerable.Range functionality
            var numbers = Enumerable.Range(10, 90);

            var oddTwoDivide7 = numbers.Where(n => n % 7 == 0 && n % 2 != 0).ToList();

            Console.WriteLine("All odd two-digit numbers that divisable by 7");
            foreach (var item in oddTwoDivide7)
            {
                Console.WriteLine(item);
            }

            //Using Enumerable 'Repeat' print 'I like C#' 10 times
            
            IEnumerable<string> repeatString = Enumerable.Repeat("I Like C#", 10);

            foreach (var item in repeatString)
            {
                Console.WriteLine(item);
            }
            
            Console.ReadLine();
        }
    }
}