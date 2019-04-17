using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Results
{
    public class Trainer : Person
    {
        public Dictionary<int, int> StudentsGrades { get; set; }


        public Trainer()
        {

        }

        public Trainer(int id, string name) : base (id, name)
        {
            Role = Roles.Trainer;
            StudentsGrades = new Dictionary<int, int>();
        }

        public static void AddGrade(Student student, int grade)
        {
            student.Grade = grade;
        }

        //Action<Student> StudentGradeHundler;

        public void ReadResults(Student student)
        {
            Console.WriteLine("The grade of {0} is {1}", student.Name, student.Grade);
        }

        


    }
}
