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
            // ######## Exe.01 #######
            double firstDouble;
            double secondDouble;
            double resultDouble;
            firstDouble = 1;
            secondDouble = 3;
            resultDouble = firstDouble / secondDouble;
            //String.Format("{0:0.00}", resultDouble);
            //value = System.Math.Round(value, 2);
            Console.WriteLine(String.Format("{0:00.000}", resultDouble));

            int firstInt;
            int secondInt;
            int resultInt;
            firstInt = 15;
            secondInt = 3;
            resultInt = firstInt / secondInt;
            Console.WriteLine(String.Format("{0:0.00}", resultInt));

            // ######## Exe.02 #######
            string firstString;
            string secondString;
            string resultString;
            firstString = "Hey";
            secondString = "there";
            resultString = firstString + " " + secondString;
            Console.WriteLine(String.Format("{0:0.00}", resultString));

            string thirdString;
            string fourthString;
            string otherResultString;
            thirdString = "9";
            fourthString = "3";
            otherResultString = thirdString + " " + fourthString;
            Console.WriteLine(String.Format("{0:0.00}", otherResultString));

            // ######## Exe.03 #######
            string fifthString;
            int thirdInt;
            string thirdResultString;
            fifthString = "I have ";
            thirdInt = 1000000;
            thirdResultString = fifthString + thirdInt;
            Console.WriteLine(thirdResultString);

            // ######## Exe.04 #######
            int credits = 102;
            int smsCost = 5;
            int numOfSms = credits / smsCost;
            int remained = credits % smsCost;
            Console.WriteLine("You can send " + numOfSms + " SMSs, and you will have " + remained + " denars left.");
            Console.WriteLine("");

            // ######## Exe.05 #######
            Console.WriteLine("Enter No. of trees");
            string treeNoString = Console.ReadLine();
            int treeNo;
            bool treeNoBool = Int32.TryParse(treeNoString, out treeNo);
            Console.WriteLine("Enter No. of apples");
            string appleNoString = Console.ReadLine();
            int appleNo;
            bool appleNoBool = Int32.TryParse(appleNoString, out appleNo);
            Console.WriteLine("Enter capacity of basket");
            string basketCapString = Console.ReadLine();
            int basketCap;
            bool basketCapBool = Int32.TryParse(basketCapString, out basketCap);
            int basketNo = (treeNo * 12 * appleNo) / basketCap;
            if((treeNo * 12 * appleNo) % basketCap == 0)
            {
                Console.WriteLine("You will need " + basketNo);
            } else
            {
                Console.WriteLine("You will need " + (basketNo + 1));
            }

            // ######## Exe.06 #######
            Console.WriteLine("Enter first number!");
            string firstNoString = Console.ReadLine();
            int firstNo;
            bool firstNoBool = Int32.TryParse(firstNoString, out firstNo);
            Console.WriteLine("Enter second number!");
            string secondNoString = Console.ReadLine();
            int secondNo;
            bool secondNoBool = Int32.TryParse(secondNoString, out secondNo);
            if(firstNo > secondNo)
            {
                if(firstNo % 2 == 0)
                {
                    Console.WriteLine(firstNo + " is the largest No. and it's even.");
                } else
                {
                    Console.WriteLine(firstNo + " is the largest No. and it's odd.");

                }
            } else if (secondNo > firstNo)
                if (secondNo % 2 == 0)
                {
                    Console.WriteLine(secondNo + " is the largest No. and it's even.");
                }
                else
                {
                    Console.WriteLine(secondNo + " is the largest No. and it's odd.");

                }
            else
            {
                Console.WriteLine(" The two numbers are euquals.");
            }


            Console.ReadLine();


        }
    }
}
