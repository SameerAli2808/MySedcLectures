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
            double denToEur = 62.2;
            double denToUsd = 53.1;
            double denToGbp = 71.6;
            double exchanedAmount = 0;

            Console.WriteLine("Enter the amount in deners!");
            string amountString = Console.ReadLine();
            double amount;
            bool isAmountBool = double.TryParse(amountString, out amount);

            Console.WriteLine("Enter the currancy you want to exchange to (EUR, USD or GBP)");
            string currancy = Console.ReadLine();

            switch (currancy)
            {
                case "EUR":
                    exchanedAmount = amount / denToEur;
                    break;
                case "USD":
                    exchanedAmount = amount / denToUsd;
                    break;
                case "GBP":
                    exchanedAmount = amount / denToGbp;
                    break;
                default:
                    Console.WriteLine("No such currancy, sorry!");
                    break;
            }

            Console.WriteLine(String.Format("{0:000,0.00}", amount) + " deners are " + String.Format("{0:000,0.00}", exchanedAmount) + " " + currancy );
            Console.ReadLine();
        }
    }
}
