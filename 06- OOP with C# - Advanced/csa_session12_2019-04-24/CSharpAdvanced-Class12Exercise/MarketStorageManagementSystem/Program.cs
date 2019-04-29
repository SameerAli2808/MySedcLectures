using Models;
using Models.Enums;
using Models.Models;
using System.Collections.Generic;
using System;
using System.IO;
using System.Linq;
using System.Xml.Serialization;
using Newtonsoft.Json;

namespace MarketStorageManagementSystem
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Product> products = new List<Product>()
            {
                new Product(1, "HDD", Color.Black, Channel.Local, new SerialInfo("S001PN1", 1), new MarketValueDetails(10, 1000.50), ProductionCondition.New, new List<string>(){ "Macedonia", "Iraq"}),
                new Product(2, "CPU", Color.Gray, Channel.Local, new SerialInfo("S001PN111", 12), new MarketValueDetails(12, 500.70), ProductionCondition.Recycled, new List<string>(){ "China", "Iraq", "Iran", "Brazil"}),
                new Product(3, "SSD", Color.Gray, Channel.Online, new SerialInfo("S001PN9", 11), new MarketValueDetails(4, 780.99), ProductionCondition.New, new List<string>(){ "Macedonia", "Hungary"}),
                new Product(4, "CPU", Color.Black, Channel.Local, new SerialInfo("S001PN8", 10), new MarketValueDetails(8, 800.00), ProductionCondition.Recycled, new List<string>(){ "Albania", "Serbia"}),
                new Product(5, "Motherboard", Color.Yellow, Channel.Online, new SerialInfo("S002PN10", 5), new MarketValueDetails(2, 1500.50), ProductionCondition.New, new List<string>(){ "Angola", "Algeria", "American Samoa"}),
                new Product(6, "VideoCard", Color.Green, Channel.Online, new SerialInfo("S002PN9", 5), new MarketValueDetails(9, 999.99), ProductionCondition.Recycled, new List<string>(){ "Cameroon", "Iraq"}),
                new Product(7, "PowerSuply", Color.Red, Channel.Local, new SerialInfo("S002PN11", 6), new MarketValueDetails(1, 500.65), ProductionCondition.New, new List<string>(){ "Macedonia", "Denmark", "Norway"}),
                new Product(8, "RAM", Color.Green, Channel.Online, new SerialInfo("S003PN1", 3), new MarketValueDetails(14, 2700.67), ProductionCondition.Recycled, new List<string>(){ "Romania", "Russia", "Qatar"}),
                new Product(9, "Keyboard", Color.Black, Channel.Online, new SerialInfo("S004PN1", 9), new MarketValueDetails(6, 400.44), ProductionCondition.New, new List<string>(){ "Macedonia", "Russia", "Morocco", "Malta"}),
                new Product(10, "Mouse", Color.Orange, Channel.Local, new SerialInfo("S005PN234", 2), new MarketValueDetails(5, 67.89), ProductionCondition.Recycled, new List<string>(){ "Nigeria", "Peru"}),
                new Product(11, "Speaker", Color.White, Channel.Local, new SerialInfo("S007PNSG54", 1), new MarketValueDetails(50, 2300.11), ProductionCondition.New, new List<string>(){ "Portugal", "Poland", "Spain"}),
            };

            #region Product Sorting
            // ************* by Serial Number ****************
            products.Sort();

            foreach (var item in products)
            {
                Console.WriteLine("Name: {0} === Serial Number: {1}", item.Name, item.SerialInfo.SerialNumber);
            }

            // ************* by Quantity ****************
            products.Sort(new ComparerQuantity());

            foreach (var item in products)
            {
                Console.WriteLine("{0} {1}", item.Name, item.MarketValueDetails.Quantity);
            }

            // ************* by Country ****************
            products.Sort(new ComparerCountry());

            foreach (var item in products)
            {
                Console.WriteLine("===== {0} =====", item.Name);

                foreach (var item01 in item.DestinationCountries)
                {
                    Console.WriteLine(item01);
                }
            }

            #endregion

            #region Creat Directory and File, then write the Product list in the file 
            var dirPath = @"E:\My Files\SEDC\mySedcLectures\06- OOP with C# - Advanced\csa_session12_2019-04-24\CSharpAdvanced-Class12Exercise\Created";
            DirectoryInfo dir1 = new DirectoryInfo(dirPath);
            dir1.Create();
            dir1.CreateSubdirectory("Sub");

            FileInfo fiPath = new FileInfo(@"E:\My Files\SEDC\mySedcLectures\06- OOP with C# - Advanced\csa_session12_2019-04-24\CSharpAdvanced-Class12Exercise\Created\MyProducts.txt");
            //FileStream fstr = fiPath.Create();
            StreamWriter sw = fiPath.CreateText();

            products.Sort(new ComparerID());
            foreach (var product in products)
            {
                sw.WriteLine("ID: {0} === Name: {1} === Color: {2} === Channel: {3}", product.Id, product.Name, product.Color, product.Channel);
                sw.WriteLine("          Serial Number: {0} === Build Version: {1}", product.SerialInfo.SerialNumber, product.SerialInfo.BuildVersion);
                sw.WriteLine("          Quantity: {0} === Price: ${1} === Condition: {2}", product.MarketValueDetails.Quantity, product.MarketValueDetails.Price, product.ProductionCondition);
                sw.Write("          Destination Countries: ");
                for (int i = 0; i < product.DestinationCountries.Count(); i++)
                {
                    if (i == 0)
                    {
                        sw.Write("{0}", product.DestinationCountries[i]);
                    }
                    else
                    {
                        sw.Write(", {0}", product.DestinationCountries[i]);
                    }
                }
                sw.Write(sw.NewLine);
                sw.WriteLine();
            }
            sw.Close();

            #endregion

            #region XML Serialization

            // xml object serialized
            XmlSerializer xmlSerializer = new XmlSerializer(products.GetType());
            string xmlPath = @"E:\My Files\SEDC\mySedcLectures\06- OOP with C# - Advanced\csa_session12_2019-04-24\CSharpAdvanced-Class12Exercise\Created\ProductXml.xml";
            using (StreamWriter xmlSw = new StreamWriter(xmlPath))
            {
                xmlSerializer.Serialize(xmlSw, products);
            }

            //// xml object deserialization...
            //Product proDeserialized;
            //using (StreamReader xmlSr = new StreamReader(xmlPath))
            //{
            //    proDeserialized = (Product)xmlSerializer.Deserialize(xmlSr);
            //}
            //Console.WriteLine("xml object deserialized.");
            //Console.WriteLine(proDeserialized.ToString());

            #endregion

            #region Json Serialization

            // json object serialized
            string json = JsonConvert.SerializeObject(products, Formatting.Indented);
            string jsonPath = @"E:\My Files\SEDC\mySedcLectures\06- OOP with C# - Advanced\csa_session12_2019-04-24\CSharpAdvanced-Class12Exercise\Created\JsonProduct.json";
            File.WriteAllText(jsonPath, json);

            // Deserializing json collection
            List<Product> prosDeserialized;

            string readJson = File.ReadAllText(jsonPath);
            prosDeserialized = JsonConvert.DeserializeObject<List<Product>>(readJson);

            //foreach (var e in prosDeserialized)
            //{
            //    Console.WriteLine(e.ToString());
            //}

            #endregion

            Console.ReadLine();
        }
    }
}
