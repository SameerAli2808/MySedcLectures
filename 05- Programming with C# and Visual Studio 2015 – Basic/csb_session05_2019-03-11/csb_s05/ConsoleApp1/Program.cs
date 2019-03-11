using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp1.Classes;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Human user = new Human();

            Console.WriteLine("Enter the first name");
            user.firstName = Console.ReadLine();
            Console.WriteLine("Enter the last name");
            user.lastName= Console.ReadLine();
            Console.WriteLine("Enter the age");
            string userAgeString = Console.ReadLine();
            bool isAgetBool = int.TryParse(userAgeString, out user.age);

            
            Console.WriteLine(user.GetPersonalInfo());

            Console.ReadLine();
        }
    }
}
