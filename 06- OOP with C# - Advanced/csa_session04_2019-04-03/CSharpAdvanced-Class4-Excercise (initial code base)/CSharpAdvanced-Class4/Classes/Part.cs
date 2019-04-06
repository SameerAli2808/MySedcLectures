using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CSharpAdvanced_Class4.Interfaces;
using static CSharpAdvanced_Class4.Enums.Enums;

namespace CSharpAdvanced_Class4.Classes
{
    public class Part : Item, IPrice
    {
        public double GetPrice()
        {
            return Price;
        }
    }
}
