using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace s06_ex01
{
    class Program
    {
        static void NumberStats(string numberString)
        {
            double number;
            bool isNumberBool = double.TryParse(numberString, out number);

            Console.WriteLine("Stats of number: {0}", number);
            if(number >= 0)
                Console.WriteLine("Positive");
            else
                Console.WriteLine("Negetive");

            if(number % 1 == 0)
                Console.WriteLine("Integer");
            else
                Console.WriteLine("Decemal");

            if (number % 2 == 0)
                Console.WriteLine("Even");
            else if(number % 1 > 0)
            {
                int stringLenght = numberString.Length;
                string check = numberString.Substring(stringLenght-1);
                int number01;
                bool isNumberBool01 = int.TryParse(check, out number01);
                if(number01 % 2 == 0)
                    Console.WriteLine("Even");
                else
                    Console.WriteLine("Odd");
            }
            else
                Console.WriteLine("Odd");

        }


        static void Main(string[] args)
        {
            string choice;
            do
            {
                Console.WriteLine("Enter the a number!");
                string numberString = Console.ReadLine();
                
                NumberStats(numberString);
                Console.WriteLine("Would you like to enter another number? (y/n)");
                choice = Console.ReadLine();

            } while (choice == "y");

            Console.ReadLine();
        }

    }
}
