using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AcademyModels
{
    public class Person : Entity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }

        public Person(int id, string firstName, string lastName, string phone) : base(id)
        {
            FirstName = firstName;
            LastName = lastName;
            Phone = phone;
        }
    }
}
