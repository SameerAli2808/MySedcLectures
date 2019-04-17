using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Results
{
    class Program
    {
        static void Main(string[] args)
        {
            Trainer Trainer01 = new Trainer(01, "Mjodrag");

            List<Student> students = new List<Student>();
            students.Add(new Student(01, "Sameer"));
            students.Add(new Student(02, "Sinisha"));
            students.Add(new Student(03, "Damjan"));

            Trainer.AddGrade(students[0], 90);
            Trainer.AddGrade(students[1], 70);
            Trainer.AddGrade(students[2], 40);

            //Trainer readGrades = new Trainer();

            foreach (var student in students)
            {
                Action<Student> StudentGradesHandler = Trainer01.ReadResults;
            }

            Console.ReadLine();


        }
    }
}
