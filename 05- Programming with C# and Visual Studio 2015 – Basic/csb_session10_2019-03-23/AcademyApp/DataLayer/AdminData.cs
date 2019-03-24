using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AcademyApp_ClassLibrary;

namespace DataLayer
{
    public class AdminData
    {
        public List<Admin> PupulateAdmins()
        {
            List<Admin> adminsList = new List<Admin>();
            Admin admin01 = new Admin(Gender.Male, "risto", "Risto", "Panchavski", "112233", "01-01-1990", "Skopje", "071 234 567");
            adminsList.Add(admin01);

            return adminsList;
        }
        
    }
}
