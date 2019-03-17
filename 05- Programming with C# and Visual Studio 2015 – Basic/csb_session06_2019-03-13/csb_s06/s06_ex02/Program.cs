using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using s06_ex02.Classes;

namespace s06_ex02
{
    class Program
    {
        static void checking (string name, User[] Users)
        {
            int found = 0;
            foreach (var item in Users)
            {
                if (item.FullName == name)
                {
                    found = 1;
                    for (int i = 0; i < item.Messeges.Length; i++)
                    {
                        Console.WriteLine(item.Messeges[i]);
                    }
                }
            }

            if(found == 0)
            {
                Console.WriteLine("The user name is not excest in our datbase!");
                Console.WriteLine("Would you like to be regeistered? (y/n)");
                string choice = Console.ReadLine();
                if(choice == "y")
                {
                    Register(Users);
                }
            }
        }

        static void Register(User[] Users)
        {
            int index = Users.Length;
            Array.Resize(ref Users, index + 1);
            Console.WriteLine("Enter your id");
            Users[index-1].Id = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter your first name!");
            Users[index-1].FirstName = Console.ReadLine();

            Console.WriteLine("Enter your last name!");
            Users[index-1].LastName = Console.ReadLine();

            Console.WriteLine("Enter your password!");
            Users[index-1].SetPassword(Console.ReadLine());

            Console.WriteLine("Enter your first messege!");
            Users[index-1].Messeges[0] = Console.ReadLine();
            Console.WriteLine("Enter your second messege!");
            Users[index-1].Messeges[1] = Console.ReadLine();
            Console.WriteLine("Enter your third messege!");
            Users[index-1].Messeges[2] = Console.ReadLine();

            showNames(Users);
        }

        static void showNames(User[] Users)
        {
            foreach (var item in Users)
            {
                Console.WriteLine("Id: {0}", item.Id);
                Console.WriteLine("Full name: {0}", item.FullName);
                Console.WriteLine("Password: {0}", item.Password);
                for (int i = 0; i < item.Messeges.Length; i++)
                {
                    Console.WriteLine(item.Messeges[i]);
                }
            }
        }

        static void Main(string[] args)
        {
            User[] Users = new User[3];


            Users[0] = new User(01, "Sameer", "Ali", new string[] { "Hello", "Hey", "Hi" });
            Users[0].SetPassword("12345678");
            Users[1] = new User(02, "Sinisha", "Petkovski", new string[] { "Hello", "Hey", "Hi" });
            Users[1].SetPassword("12345678");
            Users[2] = new User(03, "Mustafa", "Raheem", new string[] { "Hello", "Hey", "Hi" });
            Users[2].SetPassword("12345678");

            Console.WriteLine("Enter your full name!");
            string name = Console.ReadLine();

            checking(name, Users);

            Console.ReadLine();

        }
    }
}
