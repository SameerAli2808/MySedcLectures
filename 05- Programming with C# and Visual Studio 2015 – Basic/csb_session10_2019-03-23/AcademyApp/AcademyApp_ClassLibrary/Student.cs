using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AcademyApp_ClassLibrary
{
    public class Student : Person
    {
        public Dictionary<Subject, int> Subjects { get; set; }

        public Student()
        {

        }

        public Student(Gender gender, string userName, string firstName, string lastName, string password, string dateOfBirth, string address, string phoneNumber, Dictionary<Subject, int> subjects)
            : base(gender, userName, firstName, lastName, password, dateOfBirth, address, phoneNumber, Role.Student, subjects)
        {

        }

        public static string subjectName(string subjectName)
        {
            //string subName = subjects.Keys.ToString();

            switch (subjectName)
            {
                case "HTML_CSS":
                    return "HTML & CSS";
                case "Baisc_JavaScript":
                    return "Baisc JavaScript";
                case "Advanced_JavaScript":
                    return "Advanced JavaScript";
                case "Baisc_CSharp":
                    return "Baisc C#";
                case "Advanced_CSahrp":
                    return "Advanced C#";
                case "DataBase":
                    return "Data Base";
                case "ASP":
                    return "ASP";
                case "RESTful":
                    return "RESTful";
                case "Advanced_Data_Driven":
                    return "Advanced Data Driven";
                case "Testing_Debugging":
                    return "Testing & Debugging";
                case "MERN_MEAN":
                    return "MERN & MEAN";
                case "Practical_ASP":
                    return "Practical ASP";
                case "Expert_CSharp":
                    return "Expert C#";
                default:
                    return "";
            }

        }

    }
}
