using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieRaiting_ClassLibrary
{
    public class Movie
    {
        public string Title { get; set; }
        public Genre Genre { get; set; }
        public int Raiting { get; set; }
        public int TicketPrice { get; set; }

        public Movie(string title, Genre genre, int rating)
        {
            Title = title;
            Genre = genre;
            Raiting = rating;
            TicketPrice = 5 * Raiting;
        }

    }
}
