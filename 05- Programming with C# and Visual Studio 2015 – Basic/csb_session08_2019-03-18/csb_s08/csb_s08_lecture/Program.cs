using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace csb_s08_lecture
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> names = new List<string>();
            List<string> cities = new List<string>()
            {
                "Baghdad",
                "Skipje",
                "Paris",
                "London",
                "Berlin"
            };
            names.Add("Sameer");
            names.Add("Sinisha");
            names.Add("Mustafa");

            names.Remove("Sameer");
            names.RemoveAt(1);

            cities.RemoveRange(1, 3);

            List<int> ages = new List<int>()
            {
                1,
                2,
                3,
                4,
                5
            };

            List<int> copy_ages = new List<int>(ages);

            copy_ages.AddRange(new List<int> { 6, 7, 8, 9 });

            int count = copy_ages.Count;

            Console.WriteLine(copy_ages); // System.Collections.Generic.List`1[System.Int32]

            copy_ages.ForEach(Console.WriteLine);


            Dictionary<string, int> studentss = new Dictionary<string, int>();



            Console.ReadLine();


        }
    }
}
