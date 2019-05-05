using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models
{
    public class ComparerCountry : IComparer<Product>
    {
        public int Compare(Product x, Product y)
        {
            if (x != null && y != null)
            {
                //String str1 = "ABCD";
                //String str2 = "abcd";
                //String str;
                //int result;

                //Console.WriteLine();
                //Console.WriteLine("Compare the numeric values of the corresponding Char objects in each string.");
                //Console.WriteLine("str1 = '{0}', str2 = '{1}'", str1, str2);

                //return String.CompareOrdinal(x.DestinationCountries, y.DestinationCountries);

                //str = ((result < 0) ? "less than" : ((result > 0) ? "greater than" : "equal to"));
                //Console.Write("String '{0}' is ", str1);
                //Console.Write("{0} ", str);
                //Console.WriteLine("String '{0}'.", str2);




                var lengthX = 0;
                var lengthY = 0;
                foreach (var item in x.DestinationCountries)
                {
                    lengthX += item.Length;
                }

                foreach (var item in y.DestinationCountries)
                {
                    lengthY += item.Length;
                }

                return lengthX - lengthY;
            }

            return 0;
        }
    }
}
