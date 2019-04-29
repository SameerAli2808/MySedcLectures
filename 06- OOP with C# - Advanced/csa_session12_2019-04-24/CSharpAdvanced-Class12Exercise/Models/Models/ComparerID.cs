using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models
{
    public class ComparerID : IComparer<Product>
    {
        public int Compare(Product x, Product y)
        {
            if (x != null && y != null)
            {
                return x.Id - y.Id;
            }

            return 0;
        }
    }
}
