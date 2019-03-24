using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AcademyApp_ClassLibrary
{
    public class Person
    {
        public Gender Gender { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; }
        public string DateOfBirth { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public Role Role { get; }
        public Dictionary<Subject, int> Subjects { get; set; }

        public Person()
        {

        }

        public Person(Gender gender, string userName, string firstName, string lastName, string password, string dateOfBirth, string address, string phoneNumber, Role role, Dictionary<Subject, int> subjects)
        {
            Gender = gender;
            UserName = userName;
            FirstName = firstName;
            LastName = lastName;
            Password = password;
            DateOfBirth = dateOfBirth;
            Address = address;
            PhoneNumber = phoneNumber;
            Role = role;
            Subjects = subjects;
        }

        public Person(Gender gender, string userName, string firstName, string lastName, string password, string dateOfBirth, string address, string phoneNumber, Role role)
        {
            Gender = gender;
            UserName = userName;
            FirstName = firstName;
            LastName = lastName;
            Password = password;
            DateOfBirth = dateOfBirth;
            Address = address;
            PhoneNumber = phoneNumber;
            Role = role;
        }

        public bool ValidPassword(string password)
        {
            return Password == password;
        }
    }
}
