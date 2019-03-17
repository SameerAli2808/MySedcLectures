using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibrary1;

namespace csb_s07_ex._01
{
    class Program
    {
        static void Main(string[] args)
        {
            Employee employee = new Employee("Sameer", "Ali", 234000, Role.Other);
            Console.WriteLine("The employee information are:");
            employee.PrintInfo();
            //Console.WriteLine("His salary is: {0}", employee.GetSalary());
            Console.WriteLine("");

            SelsPerson selsPerson = new SelsPerson("Sinisha", "Petkoviski", 3000);
            Console.WriteLine("The sales person information are:");
            selsPerson.PrintInfo();
            Console.WriteLine("His added success revenue is: {0}", selsPerson.AddSuccessRevenue(3000));
            //Console.WriteLine("His salary is: {0}", selsPerson.GetSalary());
            Console.WriteLine("");

            Manager manager = new Manager("Mustafa", "Raheem", 5000);
            manager.AddBonus(3000);
            Console.WriteLine("The manager information are:");
            manager.PrintInfo();
            Console.WriteLine("His bonus is: {0}", manager.AddBonus(3000));
            Console.WriteLine("");

            Console.ReadLine();
        }
    }
}
