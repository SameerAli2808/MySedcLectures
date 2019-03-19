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
        public DateTime SongLength { get; set; }
        public Gener Gener { get; set; }

        public Song(string title, DateTime songLength, Gener gener)
        {
            Tilte = title;
            SongLength = songLength;
            Gener = gener;
        }
    }
}
