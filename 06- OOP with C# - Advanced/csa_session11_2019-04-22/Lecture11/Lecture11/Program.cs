using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Lecture11
{
    class Program
    {
        static void Main(string[] args)
        {
            //string path = Path.GetTempFileName();
            string path = @"E:\My Files\SEDC\mySedcLectures\06- OOP with C# - Advanced\csa_session11_2019_04_22\Lecture11\demo.tex";
            FileInfo fi1 = new FileInfo(path);

            //Create a file to write to.
            using (StreamWriter sw = fi1.CreateText())
            {
                sw.WriteLine("Hello, My name is Sameer");
                sw.WriteLine("I am studying web development");
                sw.WriteLine("Whis you all the best");
            }

            //Open the file to read from.
            using (StreamReader sr = fi1.OpenText())
            {
                string s = "";
                while ((s = sr.ReadLine()) != null)
                {
                    Console.WriteLine(s);
                }
            }

            //try
            //{
            //    string path2 = Path.GetTempFileName();
            //    FileInfo fi2 = new FileInfo(path2);

            //    //Ensure that the target does not exist.
            //    fi2.Delete();

            //    //Copy the file.
            //    fi1.CopyTo(path2);
            //    Console.WriteLine("{0} was copied to {1}.", path, path2);

            //    //Delete the newly created file.
            //    fi2.Delete();
            //    Console.WriteLine("{0} was successfully deleted.", path2);

            //}
            //catch (Exception e)
            //{
            //    Console.WriteLine("The process failed: {0}", e.ToString());
            //}

            Console.ReadLine();
        }
    }
}
