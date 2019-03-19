using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SupperMarket_ClassLibrary
{
    public class Cart
    {
        public string SerialNumber { get; set; }
        public List<Product> Products = new List<Product>();

        public Cart()
        {

        }

        public Cart(string serialNumber, List<Product> products)
        {
            SerialNumber = serialNumber;
            Products = products;
        }
    }
}
