using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace studentApplication.Classes
{
    class student
    {
        public string name;
        public string academy;
        public string group;

        public student(string name, string academy, string group)
        {
            string Name = name;
            string Academy = academy;
            string Group = group;
        }

        public string studentInfo()
        {
            return $"The student name is {name}, he is studying in {academy} academy and he is in group {group}.";
        }
    }
}
