using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            ArrayList array = new ArrayList() { "Test", 100, new DateTime() };

            var result = array.ToArray();
            var result0 = result[0];
            Console.WriteLine(result0);


            Console.ReadLine();



        }
    }
}
