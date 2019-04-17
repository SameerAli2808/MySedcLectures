using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Results
{
    public class Student : Person
    {
        public int Grade { get; set; }

        public Student()
        {

        }

        public Student(int id, string name)
        {
            ID = id;
            Name = name;
        }

        public static Student InitialLoad(int id, string name)
        {
            return new Student(id, name);
        }

        public void ProcessVideo(string filePath, string fileName, Action<Student> studentGradesHandler)
        {
            Student student = Student.InitialLoad(ID, Name);

            studentGradesHandler(student);
        }
    }
}
