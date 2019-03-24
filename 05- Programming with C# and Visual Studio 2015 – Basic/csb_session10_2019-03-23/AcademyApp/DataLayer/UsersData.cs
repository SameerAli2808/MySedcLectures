using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AcademyApp_ClassLibrary;

namespace DataLayer
{
    public class UsersData
    {
        public List<Person> PupulateUsers()
        {
            List<Person> usersList = new List<Person>()
            {
                new Admin (Gender.Male, "risto", "Risto", "Panchavski", "112233", "01-01-1990", "Skopje", "071 234 567"),
                new Admin(Gender.Male, "dragan", "Dragan", "Dragonovski", "112233", "01-01-1990", "Skopje", "071 234 567"),

                new Trainer(Gender.Male, "martin", "Martin", "Panovski", "112233", "01-01-1990", "Skopje", "071 234 567"),
                new Trainer(Gender.Male, "dejan", "Dejan", "Dejanovski", "112233", "01-01-1990", "Skopje", "071 234 567"),

                new Student(Gender.Male, "sameer", "Sameer", "Ali", "112233", "01-01-1980", "Skopje", "071 234 567", new Dictionary<Subject, int> {
                {Subject.HTML_CSS, 4 },
                {Subject.Baisc_JavaScript, 5 },
                {Subject.Advanced_JavaScript, 4 },
                {Subject.Baisc_CSharp, 5 },
                {Subject.Advanced_CSahrp, -1 },
                {Subject.DataBase, -1 },
                {Subject.ASP, -1 },
                {Subject.RESTful, -1 },
                {Subject.Advanced_Data_Driven, -1 },
                {Subject.Testing_Debugging, -1 },
                {Subject.MERN_MEAN, -1 },
                {Subject.Practical_ASP, -1 },
                {Subject.Expert_CSharp, -1 },
                }),
                new Student(Gender.Male, "damjan", "Damjan", "Stojnovski", "112233", "01-01-1990", "Skopje", "071 234 567", new Dictionary<Subject, int>(){
                {Subject.HTML_CSS, 4 },
                {Subject.Baisc_JavaScript, 5 },
                {Subject.Advanced_JavaScript, -1 },
                {Subject.Baisc_CSharp, 5 },
                {Subject.Advanced_CSahrp, -1 },
                {Subject.DataBase, -1 },
                {Subject.ASP, -1 },
                {Subject.RESTful, -1 },
                {Subject.Advanced_Data_Driven, -1 },
                {Subject.Testing_Debugging, -1 },
                {Subject.MERN_MEAN, -1 },
                {Subject.Practical_ASP, -1 },
                {Subject.Expert_CSharp, -1 },
                }),
                new Student(Gender.Female, "stefana", "Stefana", "Stefanovska", "112233", "01-01-1990", "Skopje", "071 234 567", new Dictionary<Subject, int>(){
                {Subject.HTML_CSS, 4 },
                {Subject.Baisc_JavaScript, 5 },
                {Subject.Advanced_JavaScript, 4 },
                {Subject.Baisc_CSharp, 5 },
                {Subject.Advanced_CSahrp, -1 },
                {Subject.DataBase, -1 },
                {Subject.ASP, -1 },
                {Subject.RESTful, -1 },
                {Subject.Advanced_Data_Driven, -1 },
                {Subject.Testing_Debugging, -1 },
                {Subject.MERN_MEAN, -1 },
                {Subject.Practical_ASP, -1 },
                {Subject.Expert_CSharp, -1 },
                }),
                new Student(Gender.Male, "igor", "Igor", "Igorovski", "112233", "01-01-1990", "Skopje", "071 234 567", new Dictionary<Subject, int>(){
                {Subject.HTML_CSS, 4 },
                {Subject.Baisc_JavaScript, 5 },
                {Subject.Advanced_JavaScript, 4 },
                {Subject.Baisc_CSharp, 5 },
                {Subject.Advanced_CSahrp, -1 },
                {Subject.DataBase, -1 },
                {Subject.ASP, -1 },
                {Subject.RESTful, -1 },
                {Subject.Advanced_Data_Driven, -1 },
                {Subject.Testing_Debugging, -1 },
                {Subject.MERN_MEAN, -1 },
                {Subject.Practical_ASP, -1 },
                {Subject.Expert_CSharp, -1 },
                }),
                new Student(Gender.Male, "bojana", "Bojana", "Bojanovska", "112233", "01-01-1990", "Skopje", "071 234 567", new Dictionary<Subject, int>(){
                {Subject.HTML_CSS, 4 },
                {Subject.Baisc_JavaScript, 5 },
                {Subject.Advanced_JavaScript, 4 },
                {Subject.Baisc_CSharp, 5 },
                {Subject.Advanced_CSahrp, -1 },
                {Subject.DataBase, -1 },
                {Subject.ASP, -1 },
                {Subject.RESTful, -1 },
                {Subject.Advanced_Data_Driven, -1 },
                {Subject.Testing_Debugging, -1 },
                {Subject.MERN_MEAN, -1 },
                {Subject.Practical_ASP, -1 },
                {Subject.Expert_CSharp, -1 },
                }),

            };
            
            return usersList;
        }
    }
}
