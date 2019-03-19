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
                    Register(Users, Users.Length);
                }
            }
        }

        static void Register(User[] Users, int tt)
        {
            tt++;
            Array.Resize<User>(ref Users, tt+1);
            Console.WriteLine("Enter your id");
            Users[tt].Id = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter your first name!");
            Users[tt].FirstName = Console.ReadLine();

            Console.WriteLine("Enter your last name!");
            Users[tt].LastName = Console.ReadLine();

            Console.WriteLine("Enter your password!");
            Users[tt].SetPassword(Console.ReadLine());

            Console.WriteLine("Enter your first messege!");
            Users[tt].Messeges[0] = Console.ReadLine();
            Console.WriteLine("Enter your second messege!");
            Users[tt].Messeges[1] = Console.ReadLine();
            Console.WriteLine("Enter your third messege!");
            Users[tt].Messeges[2] = Console.ReadLine();

            Console.WriteLine("Id: {0}, Full name: {1}, Password: {2}", Users[tt].Id, Users[tt].FullName, Users[tt].Password);
            //showNames(Users);
        }

        static void showNames(User[] Users)
        {
            for(int t = 0; t < Users.Length; t++)
            {
                Console.WriteLine("Id: {0}, Full name: {1}, Password: {2}", Users[t].Id, Users[t].FullName, Users[t].Password);
                for (int j = 0; j < Users[t].Messeges.Length; j++)
                {
                    Console.WriteLine(Users[t].Messeges[j]);
                }
                Console.WriteLine("");
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
            showNames(Users);

            Console.ReadLine();

        }
    }
}
