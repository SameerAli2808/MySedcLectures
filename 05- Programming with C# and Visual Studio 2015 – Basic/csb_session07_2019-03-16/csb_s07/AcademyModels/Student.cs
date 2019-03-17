using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AcademyModels
{
    public class Student : Person
    {
        public string Email { get; set; }

        public Student(int id, string firstName, string lastName, string phone, string email) 
            : base(id, firstName, lastName, phone)
        {
            Email = email;
        }
    }
}
