using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace session13_class
{
    class Program
    {
        static void ChildCallLogic()
        {
            Thread.Sleep(2000);
            Console.WriteLine("Call from child");
        }

        static void Main(string[] args)
        {
            Thread mainThread = Thread.CurrentThread;
            mainThread.Name = "MAIN";

            Thread childThread = new Thread(ChildCallLogic);
            childThread.Start();

            Thread childThread01 = new Thread(() =>
            {
                Thread.Sleep(2000);
                Console.WriteLine("Call from child");
            });
            childThread01.Start();

            new Thread(() =>
            {
                Thread.Sleep(2000);
                Console.WriteLine("Call from child");
            }).Start();

            Console.WriteLine(mainThread.Name);

            Console.ReadLine();
        }
    }
}
