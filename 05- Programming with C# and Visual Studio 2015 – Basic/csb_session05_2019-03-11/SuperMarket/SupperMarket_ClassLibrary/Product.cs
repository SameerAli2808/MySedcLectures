using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SupperMarket_ClassLibrary
{
    public class Product
    {
        public string Name { get; set; }
        public int Price { get; set; }
        public string SerialNumber { get; set; }
        public string Description { get; set; }
        public string Declaration { get; set; }

        //public Product()
        //{

        //}

        public Product(string name, int price, string serialNumber, string description, string declaration)
        {
            Name = name;
            Price = price;
            SerialNumber = serialNumber;
            Description = description;
            Declaration = declaration;
        }

    }
}
