using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhoneBook
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, string> PhoneBook = new Dictionary<string, string>()
            {
                { "Sameer", "071215553" },
                { "Sinisha", "075123456" },
                { "Mustafa", "079123456" }
            };

            Console.WriteLine("Enter a name, please!");
            string name = Console.ReadLine();

            //int found = 0;
            //foreach (var item in PhoneBook)
            //{
            //    if(item.Key == name)
            //    {
            //        found = 1;
            //        Console.WriteLine(item.Value);
            //    }
            //}

            string value;
            bool isthere = PhoneBook.TryGetValue(name, out value);
            if (isthere)
            {
                Console.WriteLine(value);
            }
            else
            {
                Console.WriteLine("The name is not exicest, sorry!");
            }
            

            Console.ReadLine();

        }
    }
}
