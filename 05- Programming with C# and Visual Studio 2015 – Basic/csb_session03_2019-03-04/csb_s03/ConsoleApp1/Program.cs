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
            //for(int i = 0; i < 10; i++)
            //{
                // Some code to be excuted ......
            //}

           // int t = 10;
            //while(t < 15)
            //{
                // Some code to be excuted ......
           // }

           // do
           // {
                // Some code to be excuted ......
           // } while (t < 15);


            // ##### Exe. 01 #####
            //Console.WriteLine("Enter first number!");
            //string firstNoString = Console.ReadLine();
            //int firstNo;
            //bool firstNoBool = Int32.TryParse(firstNoString, out firstNo);

            //for(int i=1; i <= firstNo; i++)
            //{
            //    if(i < firstNo)
            //    {
            //        Console.Write(i + ", ");
            //    }
            //    else
            //    {
            //        Console.Write(i);
            //        Console.WriteLine(" ");
            //    }
                
            //}

            //Console.WriteLine("Enter second number!");
            //string secondNoString = Console.ReadLine();
            //int secondNo;
            //bool secondNoBool = Int32.TryParse(secondNoString, out secondNo);

            //for (int t = secondNo; t >= 1; t--)
            //{
            //    if (t > 1)
            //    {
            //        Console.Write(t + ", ");
                    
            //    }
            //    else
            //    {
            //        Console.Write(t);
            //        Console.WriteLine(" ");
            //    }
            //}

            // ##### Exe. 02 #####
            //Console.WriteLine("Enter first number!");
            //string firstNoString = Console.ReadLine();
            //int firstNo;
            //bool firstNoBool = Int32.TryParse(firstNoString, out firstNo);

            //for (int i = 1; i <= firstNo; i++)
            //{
            //    if (i < firstNo && i % 2 == 0)
            //    {
            //        Console.Write(i + ", ");
            //    }
            //    if(i == firstNo && i % 2 == 0)
            //    {
            //        Console.Write(i);
            //        Console.WriteLine(" ");
            //    }

            //}

            //Console.WriteLine("Enter second number!");
            //string secondNoString = Console.ReadLine();
            //int secondNo;
            //bool secondNoBool = Int32.TryParse(secondNoString, out secondNo);

            //for (int t = secondNo; t >= 1; t--)
            //{
            //    if (t > 1 && t % 2 == 1)
            //    {
            //        Console.Write(t + ", ");

            //    }
            //    if(t == 1 && t % 2 == 1)
            //    {
            //        Console.Write(t);
            //        Console.WriteLine(" ");
            //    }
            //}

            // ##### Exe. 03 #####
            //Console.WriteLine("Enter a number!");
            //string firstNoString = Console.ReadLine();
            //int firstNo;
            //bool firstNoBool = Int32.TryParse(firstNoString, out firstNo);

            //int counter = 0;
            //for (int i = 1; i <= firstNo; i++)
            //{
            //    if (i % 3 == 0 || i % 7 == 0)
            //    {
            //        continue;
            //    } else
            //    {
            //        counter++;
            //        if(counter <= 100)
            //        {
            //            Console.WriteLine("Counter: " + counter);
            //            Console.WriteLine(i);
            //        } else
            //        {
            //            Console.WriteLine("The limit is reached");
            //            break;
            //        }
            //    }
            //}

            // #####################   Array   ####################
            int[] integerArray;
            integerArray = new int[6];

            int[] integerArray2 = new int[5] { 1, 4, 5, 3, 5 };

            // ##### Exe. 04 #####
            //string[] stringArray = new string[5] { "Hey", "Hello", "Hi", "What's up", "How's doing" };
            //float[] floatArray = new float[5] {1.1f, 2.2f, 3.4f, 4.5f, 54.2f};
            //bool[] boolArray = new bool[5] { true, true, false, true, false};
            //int[,] intArray = new int[2, 5] { {1, 2, 3, 4, 5 }, {6, 7, 8, 9, 10 } };
            //char[] charArray = new char[5];

            // ##### Exe. 05 #####
            //int[] otherIntArray = new int[5];
            //int counter = 0;
            //foreach(int elem in otherIntArray)
            //{
            //    Console.WriteLine("Enter a number!");
            //    string firstNoString = Console.ReadLine();
            //    int firstNo;
            //    bool firstNoBool = Int32.TryParse(firstNoString, out firstNo);
            //    otherIntArray[elem] = firstNo;
            //    counter += firstNo;
            //}

            ////Console.WriteLine("The summation of the numbers is: " + counter);

            // ##### Exe. 06 #####
            string[] namesArray = new string[1];
            int i = 0;
            string choose = "a";
            Console.WriteLine("Enter name!");
            string name = Console.ReadLine();
            namesArray[i] = name;
            do
            {
                Console.WriteLine("Would you like to enter an other name? (y/n)");
                choose = Console.ReadLine();
                if (choose == "y")
                {
                    i++;
                    Console.WriteLine("Enter an other name!");
                    name = Console.ReadLine();
                    Array.Resize<string>(ref namesArray, i+1);
                    namesArray[i] = name;
                }
                else if (choose == "n")
                {
                    break;
                }
            } while (choose == "y");

            for (i=0; i < namesArray.Length; i++)
            {
                Console.WriteLine(namesArray[i]);
            }

            Console.ReadLine();
        }
    }
}
