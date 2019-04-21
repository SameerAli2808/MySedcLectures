using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Comparer
{
    public class ProductPriceComparer : IComparer<Product>
    {
        public int Compare(Product product1, Product product2)
        {
            if (product1 != null && product2 != null)
            {
                return Convert.ToInt32(product1.Price - product2.Price);
            }

            return 0;
        }
    }
}
