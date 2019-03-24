using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AcademyApp_ClassLibrary
{
    public class Admin : Person
    {

        public Admin(Gender gender, string userName, string firstName, string lastName, string password, string dateOfBirth, string address, string phoneNumber) 
            : base (gender, userName, firstName, lastName, password, dateOfBirth, address, phoneNumber, Role.Admin)
        {
            
        }
        
    }
}
