using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace s06_ex02.Classes
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public string[] Messeges { get; set; }

        public string FullName
        {
            get { return FirstName + " " + LastName; }
        }

        public User(int id, string firstName, string lastName, string[] messeges)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Messeges = messeges;
        }

        public void SetPassword(string passwordString)
        {
            if (passwordString.Length < 8)
                throw new Exception("Your password must be at leasst 8 charechters");

            Password = passwordString;
        }

        
    }
}
