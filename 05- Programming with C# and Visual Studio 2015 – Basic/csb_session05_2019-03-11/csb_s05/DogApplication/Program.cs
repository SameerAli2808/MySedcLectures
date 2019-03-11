using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DogApplication.Classes;

namespace DogApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            var myDog = new Dog();

            Console.WriteLine("Enter the dog name");
            myDog.name = Console.ReadLine();
            Console.WriteLine("Enter the dog race");
            myDog.race = Console.ReadLine();
            Console.WriteLine("Enter the dog color");
            myDog.color = Console.ReadLine();
            string choise;
            do
            {
                Console.WriteLine($"What would you like {myDog.name} to do?");
                Console.WriteLine($"Choose 1: for making him eat.");
                Console.WriteLine($"Choose 2: for making him play.");
                Console.WriteLine($"Choose 3: for making him chasing his tail.");
                Console.WriteLine($"Choose 4: for leaving him rest");
                
                choise = Console.ReadLine();

                switch (choise)
                {
                    case "1":
                        Console.WriteLine(myDog.dogEats());
                        break;
                    case "2":
                        Console.WriteLine(myDog.dogPlaying());
                        break;
                    case "3":
                        Console.WriteLine(myDog.ChaseTail());
                        break;
                    default:
                        Console.WriteLine("You entered invalid choise!!!");
                        choise = "4";
                        break;

                }

            } while (choise != "4");


            Console.ReadLine();


        }
    }
}
