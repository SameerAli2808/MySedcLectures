using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public Job Occupation { get; set; }
        public List<Dog> Dogs { get; set; }

        public Person() { }

        public Person(string firstName, string lastName, int age, Job occupation)
        {
            FirstName = firstName;
            LastName = lastName;
            Age = age;
            Occupation = occupation;
            Dogs = new List<Dog>();
        }

        public void GiveGift(Person person, string dog)
        {
            person.Dogs.Add(this.Dogs.Where(d => d.Name == dog).FirstOrDefault());
            this.Dogs.Remove(this.Dogs.Where(d => d.Name == dog).FirstOrDefault());
        }

        public bool CheckRace()
        {
            if (this.Dogs.Count() > 0)
            {
                var FirstDogRace = this.Dogs.Select(d => d.Race).First();

                foreach (var dog in this.Dogs)
                {
                    if (dog.Race != FirstDogRace)
                    {
                        return false;
                    }
                }

                return true;
            }
    
            return false;
        }

        public void SameRace(List<Person> nameList, Race race)
        {
            var abc = nameList.OrderBy(p => p.FirstName.Count() + p.LastName.Count()).ToList();
            foreach (var item in abc)
            {
                Console.WriteLine("{0} {1}", item.FirstName, item.LastName);
            }
        }


    }
}
