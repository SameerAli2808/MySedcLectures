using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        #region Lecture Methodes
        static void CheckDroids()
        {
            Console.WriteLine("This is not hte droid that you are looking for.");
            Console.ReadLine();
        }

        static void CheckDroid2(bool isJedi)
        {
            if (isJedi)
            {
                Console.WriteLine("This is not hte droid that you are looking for.");
                Console.ReadLine();
            }
            else
            {
                Console.WriteLine("This is the droid, it's cool!");
                Console.ReadLine();
            }
            
        }

        static string SayMyName()
        {
            return "Hello from SEDC!";
        }

        static bool IsAdmin(string rule)
        {
            if(rule == "Admin")
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        static double SumNumbers(double num01, double num02)
        {
            return num01 + num02;
        }

        static double SubNumbers(double num01, double num02)
        {
            return num01 - num02;
        }

        static void SubString(int number)
        {
            string myString = "Hello from SEDC Codecademy v7.0";
            string newString = myString.Substring(0, number);
            Console.WriteLine($"({newString}) has {number} charachters");
        }
        #endregion

        #region Ex.05 Methodes
        static void AgeCalculator(DateTime birthDate)
        {
            DateTime currentDate = DateTime.Now;
            TimeSpan ts = currentDate.Subtract(birthDate);
            DateTime age = DateTime.MinValue + ts;
            string ageDetail = string.Format("{0} Years {1} months {2} days", age.Year - 1, age.Month - 1, age.Day - 1);
            Console.WriteLine(ageDetail);

            if (age.Month - 1 == 0 && age.Day - 1 == 0)
            {
                Console.WriteLine("Congratulations ... Today is your Birthday");
                Console.WriteLine("You are exactly {0} years", age.Year);
            }
            if (age.Month - 1 == 11 && age.Day -1 == 30)
            {
                Console.WriteLine("Congratulations ... Tomorrow is your Birthday");
                Console.WriteLine("Your age will be {0} years", age.Year);
            }
            if (age.Month - 1 == 0 && age.Day - 1 == 1)
            {
                Console.WriteLine("Congratulations ... Yesterday was your Birthday");
                Console.WriteLine("You completed {0} years", age.Year);
            }

            #region Other Solution
            //TimeSpan span = currentDate.Subtract(birthDate);
            //Console.WriteLine(span);
            //Console.WriteLine("Time Difference (seconds): " + span.Seconds);
            //Console.WriteLine("Time Difference (minutes): " + span.Minutes);
            //Console.WriteLine("Time Difference (hours): " + span.Hours);
            //Console.WriteLine("Time Difference (days): " + span.Days);
            //int currentYear = currentDate.Year;
            //int currentMonth = currentDate.Month;
            //int currentDay = currentDate.Day;
            //int birthDateYear = birthDate.Year;
            //int birthDateMonth = birthDate.Month;
            //int birthDateDay = birthDate.Day;
            //int ageYear = currentYear - birthDateYear;
            //int ageMonth = currentMonth - birthDateMonth;
            //int ageDay = currentDay - birthDateDay;
            //Console.WriteLine(ageYear);
            //Console.WriteLine(ageMonth);
            //Console.WriteLine(ageDay);
            //if (currentMonth >= birthDateMonth)
            //{
            //    if (currentDay >= birthDateDay)
            //    {
            //        ageYear = currentYear - birthDateYear;
            //        ageMonth = currentMonth - birthDateMonth;
            //        ageDay = currentDay - birthDateDay;
            //    }
            //}
            //else
            //{
            //    ageYear = currentYear - birthDateYear - 1;
            //    ageMonth = currentMonth - birthDateMonth + 11;
            //    ageDay = currentDay - birthDateDay + 30;
            //}
            //Console.WriteLine(ageYear);
            //Console.WriteLine(ageMonth);
            //Console.WriteLine(ageDay);
            #endregion

        }

        #endregion

        static void Main(string[] args)
        {
            #region Lecture
            //CheckDroids();
            //CheckDroid2(false);
            //Console.WriteLine(SayMyName());

            //if(IsAdmin("Admin"))
            //{
            //    Console.WriteLine("Hello Admin");
            //}
            //else
            //{
            //    Console.WriteLine("Hello user");
            //}

            //####### Exe. 01 #########
            //double result = 0;
            //double firstNo;
            //double secondNo;
            //string operand;
            //bool firstNoBool;
            //bool secondNoBool;

            //do
            //{
            //    Console.WriteLine("Enter the operand (+ or -)");
            //    operand = Console.ReadLine();
            //    if ((operand != "+") && (operand != "-"))
            //    {
            //        Console.WriteLine("Enter oprand only!");
            //    }
            //} while ((operand != "+") && (operand != "-"));

            //do
            //{
            //    Console.WriteLine("Enter first number!");
            //    string firstNoString = Console.ReadLine();
            //    firstNoBool = double.TryParse(firstNoString, out firstNo);
            //    if (!(firstNoBool))
            //    {
            //        Console.WriteLine("Cannot enter any charetor rather than number!");
            //    }
            //} while (!(firstNoBool));

            //do
            //{
            //    Console.WriteLine("Enter second number!");
            //    string secondNoString = Console.ReadLine();
            //    secondNoBool = double.TryParse(secondNoString, out secondNo);
            //    if (!(secondNoBool))
            //    {
            //        Console.WriteLine("Cannot enter any charetor rather than number!");
            //    }
            //} while (!(secondNoBool));

            //if(operand == "+")
            //{
            //    Console.WriteLine(SumNumbers(firstNo, secondNo));
            //}

            //if (operand == "-")
            //{
            //    Console.WriteLine(SumNumbers(firstNo, secondNo));
            //}
            #endregion

            #region Exe.02
            //####### Exe. 02 #########
            //Console.WriteLine("Check your c:\\ drive");
            //Console.WriteLine(@"Check your c:\ drive");
            //Console.WriteLine("We will have \"fair\" election");
            //Console.WriteLine(@"We will have ""fair"" election"); //We MUST use (") twice in order to print (")
            //Console.WriteLine("The \\n sign means: \new line");
            //string firstStr = "Hello";
            //string secondStr = "Hey";
            //Console.WriteLine($"This is the first string {firstStr} check what you want");
            //Console.WriteLine("We can do like this to print the two strings as {0:} {1}, firstStr, secondStr");
            #endregion

            #region Exe.03
            //####### Exe. 03 #########
            //Console.WriteLine("Enter number of charachters");
            //string numString = Console.ReadLine();
            //int num;
            //bool numBool = int.TryParse(numString, out num);
            //SubString(num);
            #endregion

            #region Ex.04
            //####### Exe. 04 #########
            //DateTime currentDate = DateTime.Now;
            //Console.WriteLine($"It will be {currentDate.AddDays(3)} in 3 days from now.");
            //Console.WriteLine($"It will be {currentDate.AddMonths(1)} in 1 month from now.");
            //Console.WriteLine($"It will be {currentDate.AddDays(3).AddMonths(1)} in 1 mopnth and 3 days from now.");
            //Console.WriteLine($"It was {currentDate.AddYears(-1).AddMonths(-2)} in 1 year and 2 months ago.");
            //Console.WriteLine($"It's month {currentDate.ToString("MMMM")} now.");
            //Console.WriteLine($"It's year {currentDate.Year} now.");
            #endregion

            #region Ex. 05
            //####### Exe. 05 #########
            Console.WriteLine("Enter your birthdate (dd-mm-yyyy)");
            string bdateString = Console.ReadLine();
            DateTime bdateDate = DateTime.Parse(bdateString);
            AgeCalculator(bdateDate);

            #endregion




            Console.ReadLine();
        }
    }
}
