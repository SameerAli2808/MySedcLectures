using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CsvHelper;
using ClassLibrary;
using System.IO;

namespace OLManagementApplication
{
    class Program
    {
        static void csvWriting<T>(string path, List<T> list) where T : class
        {
            using (var mem = new MemoryStream())
            using (var writer = new StreamWriter(path))
            {
                using (var csvWriter = new CsvWriter(writer))
                {
                    //csvWriter.Configuration.Delimiter = ";";
                    csvWriter.Configuration.HasHeaderRecord = true;
                    csvWriter.Configuration.AutoMap<T>();

                    csvWriter.WriteHeader<T>();
                    csvWriter.NextRecord();
                    csvWriter.WriteRecords(list);

                    writer.Flush();
                    var result = Encoding.UTF8.GetString(mem.ToArray());
                    Console.WriteLine(result);
                }
            }
        }

        //static void csvReading<T>(string path, List<T> list) where T : class
        //{
        //    using (var mem = new MemoryStream())
        //    using (var reader = new StreamReader(path))
        //    {
        //        using (var csvReader = new CsvReader(reader))
        //        {
        //            //csvWriter.Configuration.Delimiter = ";";
        //            csvReader.Configuration.HasHeaderRecord = true;
        //            csvReader.Configuration.AutoMap<T>();

        //            csvReader.ReadHeader();
        //            csvReader.

        //            csvReader.ReadHeader<T>();
        //            csvReader.NextRecord();
        //            csvReader.WriteRecords(list);

        //            reader.Flush();
        //            var result = Encoding.UTF8.GetString(mem.ToArray());
        //            Console.WriteLine(result);
        //        }
        //    }
        //}


        static void Main(string[] args)
        {
            //string pathLib = @"E:\My Files\SEDC\mySedcLectures\06- OOP with C# - Advanced\csa_session14_2019-05-08\Librarians.csv";
            ////writing csv
            //var librarians = new List<Librarian> {
            //    new Librarian{PN = 0101, FirstName ="Abcde", LastName = "Abcde", Email = "abcde.abcde@gmail.com", Password = "123@Abcde"},
            //    new Librarian{PN = 0102, FirstName ="Fghij", LastName = "Fghij", Email = "fghij.fghij@gmail.com", Password = "123@Fghij"},
            //    new Librarian{PN = 0103, FirstName ="Klmno", LastName = "Klmno", Email = "klmno.klmno@gmail.com", Password = "123@Klmno"}
            //};

            //csvWriting(pathLib, librarians);

            string pathSup = @"E:\My Files\SEDC\mySedcLectures\06- OOP with C# - Advanced\csa_session14_2019-05-08\Suppliers.csv";
            //writing csv
            var suppliers = new List<Supplier> {
                new Supplier{PN = 0101, FirstName ="Abcde", LastName = "Abcde", Email = "abcde.abcde@gmail.com", Password = "123@Abcde"},
                new Supplier{PN = 0102, FirstName ="Fghij", LastName = "Fghij", Email = "fghij.fghij@gmail.com", Password = "123@Fghij"},
                new Supplier{PN = 0103, FirstName ="Klmno", LastName = "Klmno", Email = "klmno.klmno@gmail.com", Password = "123@Klmno"}
            };

            csvWriting(pathSup, suppliers);




            var lines = File.ReadAllLines(@"E:\My Files\SEDC\mySedcLectures\06- OOP with C# - Advanced\csa_session14_2019-05-08\Librarians.csv");

            foreach (var line in lines)
            {
                string[] words = line.Split(',');

                List<Librarian> librarians = new List<Librarian>(line.Length);

                foreach (var word in words)
                {
                    List<Librarian> LibrarianList = new List<Librarian>();
                    Librarian librarian = new Librarian();

                    // Stuck here how to proceed as I tried to assign it I get paragraphs of errors and exceptions
                    librarian.PN = Convert.ToInt32(words[0]);
                    librarian.FirstName = words[1];
                    librarian.LastName = words[2];
                    librarian.Role = (words[3]);
                    Role.Member == 1
                    librarian.Email = words[4];
                    librarian.Password = words[5];

                    int count = 0;

                    var devArray[count] = LibrarianList;
                    foreach (var Developers in devArray)
                    {
                        ListViewItem item = new ListViewItem(Developer.name);
                        item.SubItems.Add(new ListViewItem.ListViewSubItem(item, Developer.address));
                        //item.SubItems.Add (new ListViewItem.ListViewSubItem (item, Developer.Age));
                        //item.SubItems.Add(new ListViewItem.ListViewSubItem(item, Developer.GrossMonthlyPay));
                        //item.SubItems.Add(new ListViewItem.ListViewSubItem(item, Developer.DepartmentID));
                        item.SubItems.Add(new ListViewItem.ListViewSubItem(item, Developer.devType));
                        item.SubItems.Add(new ListViewItem.ListViewSubItem(item, Developer.empTaxType));
                        // item.SubItems.Add(new ListViewItem.ListViewSubItem(item, Developer.AnnualTax));
                        // item.SubItems.Add(new ListViewItem.ListViewSubItem(item, Developer.AnnualNetPay));
                        listView1.Items.Add(item);
                    }



                }
            }
        }


        //IMPLEMENT THE COMPLETE FLOW - WITH READING THE CONTENT FROM THE PREVIOUSLY CREATED FILE
    }
    }
}
