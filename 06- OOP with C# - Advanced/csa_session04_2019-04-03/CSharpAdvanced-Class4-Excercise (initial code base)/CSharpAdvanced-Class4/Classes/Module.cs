using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CSharpAdvanced_Class4.Interfaces;
using static CSharpAdvanced_Class4.Enums.Enums;

namespace CSharpAdvanced_Class4.Classes
{
    public class Module : Item, IPrice, IDiscont
    {
        private List<Part> _parts = new List<Part>();

        public Module() { }

        public Module(string name)
        {
            Name = name;
        }

        public void AddPartToModule(Part part, int quantity = 1)
        {
            part.Quantity = quantity;
            _parts.Add(part);
        }

        public double GetPrice()
        {
            // TODO: Implement the GetPrice() method for the Modules
            double total = 0;
            foreach (var item in _parts)
            {
                total += item.Price * item.Quantity;
            }
            return total;
            //return 0.0; // remove this after implementation
        }

        public void SetDiscount(double discount)
        {
            if (discount >= 0)
            {
                Discount = discount / 100;
            }
            else Discount = 0;

            GetPriceWithDiscount();
            // TODO: Implement the SetDiscount() method for the Modules
            /*
             * The percentage is a number in the range [0,100]. 5% == 0.05, 10% == 0.1
             * The method should set the Discount property to values between [0.00, 1.00]
             */
        }

        public double GetPriceWithDiscount()
        {
            return GetPrice() * (1 - Discount);
        }
    }
}
