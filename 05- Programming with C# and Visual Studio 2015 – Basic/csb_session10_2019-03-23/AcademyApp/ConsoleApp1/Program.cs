using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AcademyApp_ClassLibrary;
using DataLayer;

namespace ConsoleApp1
{
    class Program
    {
        static void PrintNames(List<Person> list, Person login)
        {
            foreach (var person in list.Where(x => x.UserName != login.UserName))
            {
                Console.WriteLine("{0} :: {1} {2}", person.UserName, person.FirstName, person.LastName);
            }
        }


        static void Main(string[] args)
        {
            #region Data Populating

            UsersData usersService = new UsersData();
            List<Person> UsersList = usersService.PupulateUsers();

            #endregion

            #region Login Page

            Person loginUser;

            while (true)
            {
                Console.WriteLine("Enter your name");
                string userName = Console.ReadLine();

                loginUser = UsersList.FirstOrDefault(x => x.UserName == userName);

                if (loginUser == null)
                {
                    Console.WriteLine("You entered wrong username!");
                    Console.WriteLine("");
                    continue;
                }

                while (true)
                {
                    Console.WriteLine("");
                    Console.WriteLine("Welcome {0} {1} {2}, enter your Password:", loginUser.Role, loginUser.FirstName, loginUser.LastName);
                    string userPassword = Console.ReadLine();

                    if (!loginUser.ValidPassword(userPassword))
                    {
                        Console.WriteLine("Wrong password.");
                        continue;
                    }

                    break;
                }

                break;
            }

            #endregion

            #region Admin Role

            if (loginUser.Role == Role.Admin)
            {
                while (true)
                {
                    Console.WriteLine("");
                    Console.WriteLine("Would you like to (add) or (remove) a user?");
                    string action = Console.ReadLine();

                    if (action != "add" && action != "remove")
                    {
                        continue;
                    }

                    if (action == "add")
                    {
                        Console.WriteLine("Sorry, (add) action is not allowed for the moment!");
                        Console.WriteLine("Thank you for using our application");
                    }

                    if (action == "remove")
                    {
                        PrintNames(UsersList, loginUser);

                        Console.WriteLine("");
                        Console.WriteLine("Choose the user name of the user you want to {0}", action);
                        string removeUserName = Console.ReadLine();

                        Person removeUser = UsersList.Where(x => x.UserName != loginUser.UserName)
                            .FirstOrDefault(x => x.UserName == removeUserName);

                        if (removeUser == null)
                        {
                            Console.WriteLine("User does not exist, or you can not remove yourself");
                            continue;
                        }

                        UsersList.Remove(removeUser);
                        Console.WriteLine("");
                        Console.WriteLine("The user {0} {1} is succesfully removed.", removeUser.FirstName, removeUser.LastName);
                        Console.WriteLine("Thank you for using our application");
                    }

                    break;
                }

            }

            #endregion

            #region Trainer Role
            if (loginUser.Role == Role.Trainer)
            {
                while (true)
                {
                    Console.WriteLine("");
                    Console.WriteLine("Would you like to: 1. Show all students. 2. Show subjects.");
                    string trainerChoice = Console.ReadLine();

                    List<Person> students = UsersList.Where(x => x.Role == Role.Student).ToList();

                    if (trainerChoice == "1")
                    {
                        PrintNames(students, loginUser);

                        Console.WriteLine("");
                        Console.WriteLine("Select a student user name to show his/her grades");
                        string studentUsername = Console.ReadLine();

                        Student selectedStudent = (Student) UsersList.FirstOrDefault(x => x.UserName == studentUsername && x.Role == Role.Student);
                        Console.WriteLine("");

                        if (selectedStudent == null)
                        {
                            continue;
                        }

                        foreach (var item in selectedStudent.Subjects)
                        {
                            if (item.Value >= 0)
                            {
                                Console.WriteLine("{1} :: {0}", Student.subjectName(item.Key.ToString()), item.Value);
                            }
                        }

                    }
                    else if (trainerChoice == "2")
                    {

                        foreach (var item in students)
                        {
                            foreach (var sub in item.Subjects)
                            {
                                Console.Write(Student.subjectName(sub.Key.ToString()) + " ");
                                Console.WriteLine(UsersList.Count(x => x.Role == Role.Student && x.Subjects.Values.ToString() != "-1"));
                            }
                        }
                    }
                    else
                    {
                        Console.WriteLine("Wrong input");
                        continue;
                    }

                    break;
                }

            }

            #endregion

            #region Student Role
            if (loginUser.Role == Role.Student)
            {
                Student student = (Student)loginUser;

                while (true)
                {
                    Console.Write("");
                    Console.WriteLine("Would you like to: 1. Enroll 2.See my grades");
                    string studentChoice = Console.ReadLine();
                    if (studentChoice == "1")
                    {
                        //foreach (var item in student)
                        //{
                            foreach (var sub in student.Subjects.Keys)
                            {
                                Console.Write(Student.subjectName(sub.ToString()) + " ");
                                Console.WriteLine(UsersList.Count(x => x.Role == Role.Student && x.Subjects.Values.ToString() != "-1"));
                            }
                        //}

                        Console.WriteLine("Choose a subject:");
                        var subjectSelectedString = Console.ReadLine();

                        //List<Subject> subjectSelected = student.Subjects.Where(x => x.Subject.value >= 0).toList();

                        //if (subjectSelected == null)
                        //{
                        //    continue;
                        //}

                        //student.Enroll(subjectSelected);
                        //Console.WriteLine($"You have enrolled to {student.CurrentSubject.Name}");
                    }
                    else if (studentChoice == "2")
                    {
                        foreach (var item in student.Subjects)
                        {
                            if (item.Value >= 0)
                            {
                                Console.WriteLine("{1} :: {0}", Student.subjectName(item.Key.ToString()), item.Value);
                            }
                        }
                    }
                    else
                    {
                        Console.WriteLine("Wrong input");
                        continue;
                    }

                    break;
                }
            }


            #endregion



            Console.ReadLine();


        }
    }
}
