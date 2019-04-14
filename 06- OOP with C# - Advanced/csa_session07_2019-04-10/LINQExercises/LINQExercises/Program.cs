using System.Collections.Generic;
using System.Linq;
using ClassLibrary;
using System;


namespace LINQExercises
{
    //public class Person
    //{
    //    public string FirstName { get; set; }
    //    public string LastName { get; set; }
    //    public int Age { get; set; }
    //    public Job Occupation { get; set; }
    //    public List<Dog> Dogs { get; set; }

    //    public Person(string firstName, string lastName, int age, Job occupation)
    //    {
    //        FirstName = firstName;
    //        LastName = lastName;
    //        Age = age;
    //        Occupation = occupation;
    //    }
    //}

    //public class Dog
    //{
    //    public string Name { get; set; }
    //    public Color Color { get; set; }
    //    public int Age { get; set; }
    //    public Race Race { get; set; }

    //    public Dog(string name, Color color, int age, Race race)
    //    {
    //        Name = name;
    //        Color = color;
    //        Age = age;
    //        Race = race;
    //    }
    //}

    //public enum Race
    //{
    //    Boxer,
    //    Bulldog,
    //    Collie,
    //    Dalmatian,
    //    Doberman,
    //    Mutt,
    //    Mudi,
    //    Pointer,
    //    Pug,
    //    Plott,
    //    Husky,
    //    Cocker,
    //    Chihuahua,
    //    Retriever,
    //    Inu,
    //    Mastiff
    //}

    //public enum Job
    //{
    //    Archivist,
    //    Waiter,
    //    Choreographer,
    //    Developer,
    //    Dentist,
    //    Sculptor,
    //    Interpreter,
    //    Barber,
    //    Dietician,
    //    Lecturer,
    //    Auctioneer,
    //    Designer,
    //    Tattooist
    //}

    //public enum Color
    //{
    //    Brown,
    //    Black,
    //    White,
    //    Golden,
    //    Silver,
    //    Mix,
    //    Olive,
    //    Maroon
    //}

    class Program
    {
        public void SameRace(List<Person> nameList, Race race)
        {
            var abc = nameList.OrderBy(p => p.FirstName.Count() + p.LastName.Count()).ToList();
            foreach (var item in abc)
            {
                Console.WriteLine("{0} {1}", item.FirstName, item.LastName);
            }
        }

        static void Main(string[] args)
        {
            var people = new List<Person>()
            {
                new Person("Nathanael", "Holt", 20, Job.Choreographer),
                new Person("Jabari", "Chapman", 35, Job.Designer),
                new Person("Oswaldo", "Wilson", 19, Job.Developer),
                new Person("Kody", "Walton", 43, Job.Sculptor),
                new Person("Andreas", "Weeks", 17, Job.Developer),
                new Person("Kayla", "Douglas", 28, Job.Designer),
                new Person("Xander", "Campbell", 19, Job.Waiter),
                new Person("Soren", "Velasquez", 33, Job.Interpreter),
                new Person("August", "Rubio", 21, Job.Developer),
                new Person("Malakai", "Mcgee", 57, Job.Barber),
                new Person("Emerson", "Rollins", 42, Job.Choreographer),
                new Person("Everett", "Parks", 39, Job.Sculptor),
                new Person("Amelia", "Moody", 24, Job.Waiter),
                new Person("Emilie", "Horn", 16, Job.Waiter),
                new Person("Leroy", "Baker", 44, Job.Interpreter),
                new Person("Nathen", "Higgins", 60, Job.Archivist),
                new Person("Erin", "Rocha", 37, Job.Developer),
                new Person("Freddy", "Gordon", 26, Job.Interpreter),
                new Person("Valeria", "Reynolds", 26, Job.Dentist),
                new Person("Cristofer", "Stanley", 22, Job.Dentist),
                new Person("William", "Favorite", 29, Job.Waiter),
                new Person("James", "Ferguson", 34, Job.Tattooist),
                new Person("Julian", "Stanley", 47, Job.Auctioneer),
                new Person("Tom", "Barnes", 19, Job.Barber),
                new Person("James", "Rodriguez", 55, Job.Dentist),
                new Person("Jean", "Gaylord", 23, Job.Archivist),
                new Person("Erika", "Lawrence", 67, Job.Sculptor),
                new Person("Vanessa", "Braman", 33, Job.Lecturer),
                new Person("Donna", "Snider", 36, Job.Sculptor),
                new Person("Larry", "Ellington", 41, Job.Dietician)
            };

            var dogs = new List<Dog>()
            {
                new Dog("Charlie", Color.Black, 3, Race.Collie),
                new Dog("Buddy", Color.Brown, 1, Race.Doberman),
                new Dog("Max", Color.Olive, 1, Race.Plott),
                new Dog("Archie", Color.Black, 2, Race.Doberman),
                new Dog("Oscar", Color.Mix, 1, Race.Mudi),
                new Dog("Toby", Color.Silver, 3, Race.Bulldog),
                new Dog("Ollie", Color.Golden, 4, Race.Husky),
                new Dog("Bailey", Color.White, 4, Race.Pointer),
                new Dog("Frankie", Color.Olive, 2, Race.Retriever),
                new Dog("Jack", Color.Black, 5, Race.Dalmatian),
                new Dog("Chanel", Color.White, 1, Race.Pug),
                new Dog("Henry", Color.Black, 7, Race.Plott),
                new Dog("Bo", Color.Maroon, 3, Race.Boxer),
                new Dog("Scout", Color.Mix, 2, Race.Boxer),
                new Dog("Ellie", Color.Brown, 6, Race.Doberman),
                new Dog("Hank", Color.Silver, 2, Race.Collie),
                new Dog("Shadow", Color.Brown, 3, Race.Mudi),
                new Dog("Diesel", Color.Golden, 1, Race.Bulldog),
                new Dog("Abby", Color.Mix, 1, Race.Dalmatian),
                new Dog("Trixie", Color.Maroon, 6, Race.Mudi),
                new Dog("Alfi", Color.Black, 3, Race.Chihuahua),
                new Dog("Benji", Color.Brown, 2, Race.Cocker),
                new Dog("Ava", Color.Golden, 4, Race.Bulldog),
                new Dog("Chet", Color.Olive, 1, Race.Boxer),
                new Dog("Rigby", Color.Mix, 5, Race.Collie),
                new Dog("Sam", Color.Silver, 1, Race.Inu),
                new Dog("Tilly", Color.White, 3, Race.Retriever),
                new Dog("Yumi", Color.White, 4, Race.Retriever),
                new Dog("Zoe", Color.Brown, 9, Race.Husky),
                new Dog("Gonzo", Color.Mix, 1, Race.Doberman),
            };

            #region Exercises

            //==============================
            // TODO LINQ expressions :)
            // Your turn guys...
            //==============================

            //PART 1
            // 1. Structure the solution (create class library and move classes and enums accordingly)

            //PART 2
            // 1. Take person Cristofer and add Jack, Ellie, Hank and Tilly as his dogs.

            var Cristofer = people.Where(p => p.FirstName == "Cristofer").FirstOrDefault();
            Cristofer.Dogs = dogs.Where(d => d.Name == "Jack" || d.Name == "Ellie" || d.Name == "Hank" || d.Name == "Tilly").ToList();

            //foreach (var item in Cristofer.Dogs)
            //{
            //    Console.WriteLine(item.Name);
            //}

            // 2. Take person Freddy and add Oscar, Toby, Chanel, Bo and Scout as his dogs.

            var Freddy = people.Where(p => p.FirstName == "Freddy").FirstOrDefault();
            Freddy.Dogs = dogs.Where(d => d.Name == "Oscar" || d.Name == "Toby" || d.Name == "Chanel" || d.Name == "Bo" || d.Name == "Scout").ToList();

            // 3. Add Trixie, Archie and Max as dogs for Erin.

            var Erin = people.Where(p => p.FirstName == "Erin").FirstOrDefault();
            Erin.Dogs = dogs.Where(d => d.Name == "Trixie" || d.Name == "Archie" || d.Name == "Max").ToList();

            // 4. Give Abby and Shadow to Amelia.

            var Amelia = people.Where(p => p.FirstName == "Amelia").FirstOrDefault();
            Amelia.Dogs = dogs.Where(d => d.Name == "Abby" || d.Name == "Shadow").ToList();

            // 5. Take person Larry and add Zoe and Ollie as his dogs.

            var Larry = people.Where(p => p.FirstName == "Larry").FirstOrDefault();
            Amelia.Dogs = dogs.Where(d => d.Name == "Zoe" || d.Name == "Ollie").ToList();

            // 6. Add all dogs from race (Retriever) to Erika.

            var Erika = people.Where(p => p.FirstName == "Erika").FirstOrDefault();
            Erika.Dogs = dogs.Where(d => d.Race == Race.Retriever).ToList();

            // 7. Erin has Chet and Ava and now give Diesel to August than previously has just Rigby

            Erin.Dogs.AddRange(dogs.Where(d => d.Name == "Chet" || d.Name == "Ava" || d.Name == "Diesel").ToList());
            var August = people.Where(p => p.FirstName == "August").FirstOrDefault();
            August.Dogs = dogs.Where(d => d.Name == "Rigby").ToList();

            Erin.GiveGift(August, "Diesel");

            //PART 3 - LINQ
            // 1. Find and print all persons firstnames starting with 'E', ordered by age - DESCENDING ORDER.

            var PeopleWithR = people.Where(p => p.FirstName.StartsWith("E")).OrderByDescending(p => p.Age).ToList();

            Console.WriteLine("--------- People starts with R - Des. --------");

            foreach (var person in PeopleWithR)
            {
                Console.WriteLine("{0} {1} is {2} years old.", person.FirstName, person.LastName, person.Age);
            }

            // 2. Find and print all brown dogs names and ages older than 3 years, ordered by age - ASCENDING ORDER.

            var BrownDogsOlder3 = dogs.Where(d => d.Color == Color.Brown && d.Age > 3).OrderByDescending(d => d.Age).Reverse().ToList();

            Console.WriteLine("--------- Brown dogs that older than 3 years old - Asc. --------");

            foreach (var dog in BrownDogsOlder3)
            {
                Console.WriteLine("{0} is {1} years old.", dog.Name, dog.Age);
            }

            // 3. Find and print all persons with more than 2 dogs, ordered by name - DESCENDING ORDER.

            var PeopleWith2Dogs = people.Where(p => p.Dogs.Count() > 2).OrderByDescending(p => p.FirstName).ToList();

            // We can make short object of the main object by using Select and making the new object with the properties that we want only
            var PeopleWith2Dogs02 = people.Where(p => p.Dogs.Count() > 2).OrderByDescending(p => p.FirstName).Select(p => new { Name = p.FirstName, Last = p.LastName });
            
            Console.WriteLine("--------- People with more than 2 dogs - Des. --------");

            foreach (var person in PeopleWith2Dogs)
            {
                Console.WriteLine("{0} {1}", person.FirstName, person.LastName);
            }

            // 4. Find and print all persons names, last names and job positions that have just one race type dogs.

            Console.WriteLine("--------- People that have dogs of the same race --------");

            foreach (var person in people)
            {
                if (person.CheckRace())
                {
                    Console.WriteLine("{0} {1}", person.FirstName, person.LastName);
                }
            }

            // 5. Find and print all Freddy`s dogs names older than 1 year, grouped by dogs race.

            var FreddyDogs = Freddy.Dogs.Where(d => d.Age > 1).GroupBy(d => d.Race).ToList();

            Console.WriteLine("--------- Freddy's dogs' names older than 1 year, grouped by race --------");
            // Loop over groups.
            foreach (var group in FreddyDogs)
            {
                // Display key and its values.
                Console.Write("Race: {0} ###", group.Key);
                foreach (var value in group)
                {
                    Console.Write(" --- {0}", value.Name);
                }
                Console.WriteLine("");
            }

            // 6. Find and print last 10 persons grouped by their age.

            var LastTen = people.Skip(people.Count() - 10).GroupBy(p => p.Age).ToList().OrderBy(p => p.Key);

            Console.WriteLine("--------- Last 10 people grouped by their age --------");

            // Loop over groups.
            foreach (var group in LastTen)
            {
                // Display key and its values.
                Console.Write("Age: {0} ### ",group.Key);
                foreach (var value in group)
                {
                    Console.WriteLine("{0} {1}",value.FirstName, value.LastName);
                }
            }

            // 7. Find and print all dogs names from Cristofer, Freddy, Erin and Amelia, grouped by color and ordered by name - ASCENDING ORDER.

            var DogsByColor = Cristofer.Dogs.Concat(Freddy.Dogs).Concat(Erin.Dogs).Concat(Amelia.Dogs).ToList().GroupBy(d => d.Color);

            Console.WriteLine("--------- Dogs grouped by color and ordered by Names - Asc. --------");

            // Loop over groups.
            foreach (var group in DogsByColor)
            {
                // Display key and its values.
                Console.Write("Color: {0} ### ", group.Key);
                var DogsByName = group.OrderBy(d => d.Name).ToList();
                foreach (var value in DogsByName)
                {
                    Console.Write(" --- {0}", value.Name);
                }
                Console.WriteLine("");
            }

            // 8. Find persons that have same dogs races and order them by name length ASCENDING, then by age DESCENDING.

            var BoxerDogs = new List<Person>();
            var BulldogDogs = new List<Person>();
            var CollieDogs = new List<Person>();
            var DalmatianDogs = new List<Person>();
            var DobermanDogs = new List<Person>();
            var MuttDogs = new List<Person>();
            var MudiDogs = new List<Person>();
            var PointerDogs = new List<Person>();
            var PugDogs = new List<Person>();
            var PlottDogs = new List<Person>();
            var HuskyDogs = new List<Person>();
            var CockerDogs = new List<Person>();
            var ChihuahuaDogs = new List<Person>();
            var RetrieverDogs = new List<Person>();
            var InuDogs = new List<Person>();
            var MastiffDogs = new List<Person>();

            foreach (var person in people)
            {
                if (person.Dogs.Count() > 0)
                {
                    foreach (var item in person.Dogs)
                    {
                        switch (item.Race)
                        {
                            case Race.Boxer:
                                BoxerDogs.Add(person);
                                break;
                            case Race.Bulldog:
                                BulldogDogs.Add(person);
                                break;
                            case Race.Collie:
                                CollieDogs.Add(person);
                                break;
                            case Race.Dalmatian:
                                DalmatianDogs.Add(person);
                                break;
                            case Race.Doberman:
                                DobermanDogs.Add(person);
                                break;
                            case Race.Mutt:
                                MuttDogs.Add(person);
                                break;
                            case Race.Mudi:
                                MudiDogs.Add(person);
                                break;
                            case Race.Pointer:
                                PointerDogs.Add(person);
                                break;
                            case Race.Pug:
                                PugDogs.Add(person);
                                break;
                            case Race.Plott:
                                PlottDogs.Add(person);
                                break;
                            case Race.Husky:
                                HuskyDogs.Add(person);
                                break;
                            case Race.Cocker:
                                CockerDogs.Add(person);
                                break;
                            case Race.Chihuahua:
                                ChihuahuaDogs.Add(person);
                                break;
                            case Race.Retriever:
                                RetrieverDogs.Add(person);
                                break;
                            case Race.Inu:
                                InuDogs.Add(person);
                                break;
                            case Race.Mastiff:
                                MastiffDogs.Add(person);
                                break;
                            default:
                                break;
                        }


                    }
                }
            }

            // Couldn't call the methode that I made in Person class, don't know why???

            Console.WriteLine("--------- People that have dogs of the same race - Name lenght Asc. --------");

            var BoxerOwnerNameLenght = BoxerDogs.OrderBy(p => p.FirstName.Count() + p.LastName.Count()).ToList();
            var BulldogOwnerNameLenght = BulldogDogs.OrderBy(p => p.FirstName.Count() + p.LastName.Count()).ToList();

            foreach (var item in BoxerOwnerNameLenght)
            {
                Console.WriteLine("{0} {1}", item.FirstName, item.LastName);
            }
            foreach (var item in BulldogOwnerNameLenght)
            {
                Console.WriteLine("{0} {1}", item.FirstName, item.LastName);
            }

            Console.WriteLine("--------- People that have dogs of the same race - Age Des. --------");

            var BoxerOwnerAge = BoxerDogs.OrderByDescending(p => p.Age).ToList();
            var BulldogOwnerAge = BulldogDogs.OrderByDescending(p => p.Age).ToList();

            foreach (var item in BoxerOwnerAge)
            {
                Console.WriteLine("{0} {1} is {2} years old", item.FirstName, item.LastName, item.Age);
            }
            foreach (var item in BulldogOwnerAge)
            {
                Console.WriteLine("{0} {1} is {2} years old", item.FirstName, item.LastName, item.Age);
            }

            // 9. Find the last dog of Amelia and print all dogs form other persons older than Amelia, ordered by dogs age DESCENDING.

            var AllDogsOlder = new List<Dog>();
            var AmelliaLastDog = Amelia.Dogs.LastOrDefault();

            foreach (var item in people)
            {
                if (item.Dogs.Count() > 0)
                {
                    foreach (var dog in item.Dogs)
                    {
                        if (dog.Age > AmelliaLastDog.Age)
                        {
                            AllDogsOlder.Add(dog);
                        }
                    }
                }
            }

            var AllDogsOlderDes = AllDogsOlder.OrderByDescending(d => d.Age).ToList();

            Console.WriteLine("--------- Dogs older than Amellia's last dog - Des. --------");

            foreach (var item in AllDogsOlderDes)
            {
                Console.WriteLine(item.Name);
            }

            // 10. Find all developers older than 20 with more than 1 dog that contains letter 'e' in the name and print their names and job positions.

            Console.WriteLine("--------- Developers older than 20 with a dog has e in its name --------");

            var AllDevelopers = new List<Person>();
            foreach (var item in people)
            {
                if (item.Occupation == Job.Developer && item.Age > 20)
                {
                    var check = item.Dogs.FirstOrDefault(d => d.Name.Contains("e"));
                    if (check != null)
                    {
                        AllDevelopers.Add(item);
                    }
                }
            }

            foreach (var item in AllDevelopers)
            {
                Console.WriteLine("{0} {1} --- {2}", item.FirstName, item.LastName, item.Occupation);
            }

            #endregion

            Console.ReadLine();
        }
    }
}