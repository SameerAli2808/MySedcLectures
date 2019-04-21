using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Comparer
{
    public class ProductNameComperer : IComparer<Product>
    {
        public int Compare(Product product1, Product product2)
        {
            if (product1.Country != null && product2.Country != null)
            {
                if (product1.Name == product2.Name)
                {
                    return Convert.ToInt32(product1.Price - product2.Price);
                }
                else
                {
                    return String.CompareOrdinal(product1.Name, product2.Name);
                }
            }

            return 0;
        }
    }
}
