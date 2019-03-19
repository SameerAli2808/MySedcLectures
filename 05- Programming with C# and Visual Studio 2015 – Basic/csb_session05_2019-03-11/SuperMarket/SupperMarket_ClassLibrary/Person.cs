using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SupperMarket_ClassLibrary
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DateOfBirth { get; set; }
        public string SocialSecurityNumber { get; set; }
        public string LoyalBuyerCard { get; set; }

        public Person()
        {

        }

        public void GetLoyalBuyerCard()
        {
            Random rand = new Random();
            int randNo = rand.Next(1, 1000000);
            LoyalBuyerCard = $"LBC{randNo}";
        }

        public Person(string firstName, string lastName, string dateOfBirth, string socialSecurityNumber)
        {
            FirstName = firstName;
            LastName = lastName;
            DateOfBirth = dateOfBirth;
            SocialSecurityNumber = socialSecurityNumber;
        }
    }
}
