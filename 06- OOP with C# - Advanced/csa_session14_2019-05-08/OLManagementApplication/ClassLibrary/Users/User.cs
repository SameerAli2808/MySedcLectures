using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary
{
    public class User
    {
        public int PN { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Role Role { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public User() { }

        public User(int pn, string firstName, string lastName, string email, string password)
        {
            PN = pn;
            FirstName = firstName;
            LastName = lastName;
            EmailSetting(email);
            PasswordSetting(password);
        }

        private void EmailSetting(string email)
        {
            Email = email;
        }
        private void PasswordSetting(string password)
        {
            Password = password;
        }
    }
}
