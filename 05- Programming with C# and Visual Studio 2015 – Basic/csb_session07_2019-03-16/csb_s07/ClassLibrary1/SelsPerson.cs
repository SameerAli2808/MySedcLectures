using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public class SelsPerson : Employee
    {
        private double SuccessSaleRevenue { get; set; }

        public SelsPerson(string firstName, string lastName, double successSaleRevenue, double salary = 500, Role role = Role.Sales) :
            base(firstName, lastName, salary, role)
        {
            SuccessSaleRevenue = successSaleRevenue;
        }

        public double AddSuccessRevenue(double sales)
        {
            return SuccessSaleRevenue = sales;
        }

        public override double GetSalary()
        {
            if(SuccessSaleRevenue <= 2000)
            {
                return base.GetSalary() + 500;
            }
            else if(SuccessSaleRevenue > 2000 && SuccessSaleRevenue <= 5000)
            {
                return base.GetSalary() + 1000;
            }
            else
            {
                return base.GetSalary() + 1500;
            }
        }
    }
 
}
