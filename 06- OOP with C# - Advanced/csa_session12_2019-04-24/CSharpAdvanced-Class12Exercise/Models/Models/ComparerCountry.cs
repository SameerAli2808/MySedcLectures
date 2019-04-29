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
