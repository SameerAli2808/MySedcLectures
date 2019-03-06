using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace studentGroup
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] studentsG1 = new string[5] { "Sameer", "Damjan", "David", "Stefani", "Bojana" };
            string[] studentsG2 = new string[5] { "Borslav", "Martin", "Dejan", "Flora", "Igor" };
            string[] studentsG3 = new string[5] { "Reste", "Dragan", "Sinisha", "Slavana", "Dimitar" };
            string[] studentChosen = new string[5];

            Console.WriteLine("Choose group from 1 to 3, please!");
            string groupString = Console.ReadLine();
            int group;
            bool groupBool = int.TryParse(groupString, out group);

            switch (group)
            {
                case 1:
                    studentChosen = studentsG1;
                    Console.WriteLine("The student in group G1 are:");
                    break;
                case 2:
                    studentChosen = studentsG2;
                    Console.WriteLine("The student in group G2 are:");
                    break;
                case 3:
                    studentChosen = studentsG3;
                    Console.WriteLine("The student in group G3 are:");
                    break;
                default:
                    Console.WriteLine("There's no such a group");
                    break;
            }

            for (int i = 0; i < studentChosen.Length; i++)
            {
                Console.WriteLine(studentChosen[i]);
            }

            Console.ReadLine();
        }
    }
}
