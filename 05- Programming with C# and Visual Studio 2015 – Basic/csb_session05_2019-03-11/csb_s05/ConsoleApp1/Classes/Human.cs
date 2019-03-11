using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Classes
{
    class Human
    {
        public string firstName;
        public string lastName;
        public int age;

        public string GetPersonalInfo()
        {
            return "The full name is: " + firstName + " " +  lastName + " and the age is: " + age + " years";
        }

    }
}
