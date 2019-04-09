using CSharpAdvanced_Class4.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace CSharpAdvanced_Class4.Classes
{
    public class Room : Configuration, IPrice, IDiscont
    {
        private List<Configuration> _congigrations = new List<Configuration>();
        private List<Part> _parts = new List<Part>();
        public Room() { }

        public void AddConfigrationToRoom(Configuration configration, int quantity = 1)
        {
            configration.Quantity = quantity;
            _congigrations.Add(configration);
        }

        public void AddPartToRoom(Part part, int quantity = 1)
        {
            part.Quantity = quantity;
            _parts.Add(part);
        }

        public double GetPrice()
        {
            double totalConfigrations = 0;
            foreach (var item in _congigrations)
            {
                totalConfigrations += item.GetPriceWithDiscount() * item.Quantity;
            }

            double totalParts = 0;
            foreach (var item in _parts)
            {
                totalParts += item.Price * item.Quantity;
            }

            return totalConfigrations + totalParts;      
        }

        public double GetPriceWithDiscount()
        {
            return GetPrice() * (1 - Discount);
        }

        public void SetDiscount(double discount)
        {
            if (discount >= 0)
            {
                Discount = discount / 100;
            }
            else Discount = 0;

            GetPriceWithDiscount();

        }




    }
}
