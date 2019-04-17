using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Results
{
    public class Person
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public Roles Role { get; set; }

        public Person()
        {

        }

        public Person(int id, string name)
        {
            ID = id;
            Name = name;

        }

    }
}
