using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FavSongs_ClassLibrary
{
    public class Song
    {
        public string Tilte { get; set; }
        public int SongLength { get; set; }
        public Genre Genre { get; set; }

        public Song(string title, int songLength, Genre genre)
        {
            Tilte = title;
            SongLength = songLength;
            Genre = genre;
        }
    }
}
