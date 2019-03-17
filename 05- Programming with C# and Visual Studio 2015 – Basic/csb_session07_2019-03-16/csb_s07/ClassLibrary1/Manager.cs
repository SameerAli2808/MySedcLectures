using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public class Manager : Employee
    {
        private double Bonus { get; set; }

        public Manager(string firstName, string lastName, double salary, Role role = Role.Manager) :
            base(firstName, lastName, salary, role)
        {
        }

        public double AddBonus(double bonus)
        {
            return Bonus = bonus;
        }

        public override double GetSalary()
        {
            return Salary += Bonus;
        }
    }
}
