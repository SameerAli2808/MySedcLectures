using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models
{
    public class ComparerQuantity : IComparer<Product>
    {
        int IComparer<Product>.Compare(Product x, Product y)
        {
            if (x != null && y != null)
            {
                return x.MarketValueDetails.Quantity - y.MarketValueDetails.Quantity;
            }

            return 0;
        }
    }
}
