using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieRaiting_ClassLibrary
{
    public class Cinema
    {
        public string Name { get; set; }
        public List<int> Halls { get; set; }
        public List<Movie> ListOfMovies { get; set; }

        public Cinema(string name)
        {
            Name = name;
        }

        public static void MoviePlaying(string movieTitle)
        {
            Console.WriteLine();
            //Console.WriteLine("############################");
            Console.WriteLine($"Watching ###### {movieTitle} #####");
            //Console.WriteLine("############################");
        }

    }
}
