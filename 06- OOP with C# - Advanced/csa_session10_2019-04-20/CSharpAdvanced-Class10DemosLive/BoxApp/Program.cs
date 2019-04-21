using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoxApp
{
    class Program
    {
        public class Box
        {
            public int Length { get; set; }
            public int Width { get; set; }
            public int Height { get; set; }

            public Box()
            {

            }
            public Box(int length, int width, int height)
            {
                Width = width;
                Length = length;
                Height = height;
            }
            public int Volume()
            {
                return Length * Width * Height;
            }
            public void PrintBox()
            {
                Console.WriteLine($"Length: {this.Length}, Width: {this.Width}, Height: {this.Height}");
            }

            public static Box operator +(Box box1, Box box2)
            {
                Box box3 = new Box();
                box3.Length = box1.Length + box2.Length;
                box3.Width = box1.Width + box2.Width;
                box3.Height = box1.Height + box2.Height;
                return box3;
            }

            public static Box operator +(Box box1, int plus)
            {
                box1.Length = box1.Length + plus;
                box1.Width = box1.Width + plus;
                box1.Height = box1.Height + plus;
                return box1;
            }

            public static Box operator -(Box box1, Box box2)
            {
                Box box3 = new Box();
                box3.Length = box1.Length - box2.Length;
                box3.Width = box1.Width - box2.Width;
                box3.Height = box1.Height - box2.Height;
                return box3;
            }

            public static Box operator *(Box box1, Box box2)
            {
                Box box3 = new Box();
                box3.Length = box1.Length * box2.Length;
                box3.Width = box1.Width * box2.Width;
                box3.Height = box1.Height * box2.Height;
                return box3;
            }

            public static Box operator /(Box box1, Box box2)
            {
                Box box3 = new Box();
                box3.Length = box1.Length / box2.Length;
                box3.Width = box1.Width / box2.Width;
                box3.Height = box1.Height / box2.Height;
                return box3;
            }

            public static Box operator ++(Box box1)
            {
                box1.Length++;
                box1.Width++;
                box1.Height++;
                return box1;
            }

            public static bool operator >(Box box1, Box box2)
            {
                return box1.Volume() > box2.Volume();
            }
            public static bool operator <(Box box1, Box box2)
            {
                return box1.Volume() < box2.Volume();
            }

            public static bool operator ==(Box box1, Box box2)
            {
                return box1.Volume() == box2.Volume();
            }
            public static bool operator !=(Box box1, Box box2)
            {
                return box1.Volume() != box2.Volume();
            }

            public static bool operator &(Box box1, Box box2)
            {
                bool a = box1.Length == box2.Length;
                bool b = box1.Width == box2.Width;
                bool c = box1.Height == box2.Height;

                return a && b && c;
            }

            public static bool operator |(Box box1, Box box2)
            {
                bool a = box1.Length == box2.Length;
                bool b = box1.Width == box2.Width;
                bool c = box1.Height == box2.Height;

                return a || b || c;
            }


        }

            static void Main(string[] args)
        {

        }
    }
}
