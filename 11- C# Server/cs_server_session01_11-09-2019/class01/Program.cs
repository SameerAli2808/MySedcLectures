using System;
using System.Net;
using System.Net.Sockets;

namespace ServerRunner
{
    class Program
    {
        static void Main(string[] args)
        {
            IPAddress localhost = IPAddress.Parse("127.0.0.1");

            //TcpListener listener = new TcpListener(localhost, 13000);
            //listener.Start();
            //Console.WriteLine("Start Listening");

            Random r = new Random();
            while (true)
            {
                
                int number = r.Next();
                Console.WriteLine("number");

                if (number < 10000000)
                {
                    break;
                }
            }
        }
    }
}
