using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            double result = 0;
            double firstNo;
            double secondNo;
            string operand;
            bool firstNoBool;
            bool secondNoBool;

            do
            {
                Console.WriteLine("Enter first number!");
                string firstNoString = Console.ReadLine();
                firstNoBool = double.TryParse(firstNoString, out firstNo);
                if (!(firstNoBool))
                {
                    Console.WriteLine("Cannot enter any charetor rather than number!");
                }
            } while (!(firstNoBool));

            do
            {
                Console.WriteLine("Enter the operand (+, -, * or /)");
                operand = Console.ReadLine();
                if((operand != "+") && (operand != "-") && (operand != "*") && (operand != "/"))
                {
                    Console.WriteLine("Enter oprand only!");
                }
            } while ((operand != "+") && (operand != "-") && (operand != "*") && (operand != "/"));
            

            do
            {
                Console.WriteLine("Enter second number!");
                string secondNoString = Console.ReadLine();
                secondNoBool = double.TryParse(secondNoString, out secondNo);
                if (!(secondNoBool))
                {
                    Console.WriteLine("Cannot enter any charetor rather than number!");
                }
            } while (!(secondNoBool));

            switch (operand)
            {
                case "+":
                    result = firstNo + secondNo;
                    break;
                case "-":
                    result = firstNo - secondNo;
                    break;
                case "*":
                    result = firstNo * secondNo;
                    break;
                case "/":
                    result = firstNo / secondNo;
                    break;
                default:
                    Console.WriteLine("Enter proper operand, please!");
                    break;
            }

            Console.WriteLine("The result of ( " + firstNo + " " + operand + " " + secondNo + " ) is " + result);

            Console.ReadLine();
        }
    }
}
