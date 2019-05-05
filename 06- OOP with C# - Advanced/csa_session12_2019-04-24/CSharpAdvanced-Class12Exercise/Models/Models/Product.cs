using Models.Enums;
using Models.Models;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Models
{
    public class Product : IComparable<Product>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Color Color { get; set; }
        public Channel Channel { get; set; }
        public SerialInfo SerialInfo { get; set; }
        public MarketValueDetails MarketValueDetails { get; set; }
        public ProductionCondition ProductionCondition { get; set; }
        public List<string> DestinationCountries { get; set; }

        public Product()
        {

        }

        public Product(int id, string name, Color color, Channel channel, SerialInfo serialInfo, 
                       MarketValueDetails marketValueDetails, ProductionCondition productionCondition, 
                       List<string> destinationConutries)
        {
            Id = id;
            Name = name;
             Color = color;
            Channel = channel;
            SerialInfo = serialInfo;
            MarketValueDetails = marketValueDetails;
            ProductionCondition = productionCondition;
            DestinationCountries = destinationConutries;
        }

        public override string ToString()
        {
           return string.Format("ID: {0}, Name: {1}, Channel: {2}, Price: {3}, Serial Number: {4}, Countries: {5}"
                , Id, Name, Channel, MarketValueDetails.Price, SerialInfo.SerialNumber, string.Join(", ", DestinationCountries));
        }

        public int CompareTo(Product other)
        {
            var splitThis = this.SerialInfo.SerialNumber.Split(new string[] { "PNSG", "S", "PN" }, StringSplitOptions.RemoveEmptyEntries);
            var splitOther = other.SerialInfo.SerialNumber.Split(new string[] { "PNSG", "S", "PN" }, StringSplitOptions.RemoveEmptyEntries);

            var splitThis01 = Int32.Parse(splitThis[0]);
            var splitOther01 = Int32.Parse(splitOther[0]);
            var splitThis02 = Int32.Parse(splitThis[1]);
            var splitOther02 = Int32.Parse(splitOther[1]);
            
            if (splitThis01 > splitOther01)
                return 1;
            else if (splitThis01 < splitOther01)
                return -1;
            else
            {
                if (splitThis02 > splitOther02)
                    return 1;
                if (splitThis02 < splitOther02)
                    return -1;
            }

            return 0;
        }

        public static Product operator ++(Product p1)
        {
            var average = p1.MarketValueDetails.Price / p1.MarketValueDetails.Quantity;
            p1.MarketValueDetails.Quantity++;
            p1.MarketValueDetails.Price = average * p1.MarketValueDetails.Quantity;
            return p1;
        }

        public static Product operator *(Product p1, int vvv = 10)
        {
            p1.MarketValueDetails.Price *= 10;
            return p1;
        }

        public static bool operator ==(Product p1, Product p2)
        {
            return p1.DestinationCountries.Count() == 2 && p2.DestinationCountries.Count() == 2
                && p1.MarketValueDetails.Price > 500 && p2.MarketValueDetails.Price > 500
            ? true
            : false;
        }

        public static bool operator !=(Product p1, Product p2)
        {
            return false;
            //return p1.DestinationCountries.Count() == 2 && p2.DestinationCountries.Count() == 2
            //    && p1.MarketValueDetails.Price > 500 && p2.MarketValueDetails.Price > 500
            //? false
            //: true;
        }

    }
}
