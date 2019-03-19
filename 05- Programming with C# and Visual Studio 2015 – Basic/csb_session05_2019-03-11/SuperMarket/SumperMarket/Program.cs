using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SupperMarket_ClassLibrary;

namespace SumperMarket
{
    class Program
    {
        static void Main(string[] args)
        {
            Product tomato = new Product("Tomato", 50, "12345", "Vigtable", "Macedonian Farms");
            Product onion = new Product("Onion", 30, "11223", "Vigtable", "Macedonian Farms");
            Product vigtableOil = new Product("Viftagle Oil", 45, "12233", "Oils", "Macedonian Factory");
            Product eggsSet = new Product("Eggs Set", 115, "12223", "Animal Products", "Macedonian Farms");
            Product tulumba = new Product("Tulumba", 80, "11123", "Sweets", "Macedonian Factory");
            Product wholenuts = new Product("Wholenuts", 99, "11133", "Nuts", "Macedonian Farms");

            List<Product> ProductsList = new List<Product>()
            {
                tomato,
                onion,
                vigtableOil,
                eggsSet,
                tulumba,
                wholenuts,
            };
            

        }
    }
}
