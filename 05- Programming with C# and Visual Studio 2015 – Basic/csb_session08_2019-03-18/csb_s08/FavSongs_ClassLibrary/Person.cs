using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FavSongs_ClassLibrary
{
    public class Person
    {
        //public List<string> Fav_Songs = new List<string>();

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public Gener FavoriteMusicType { get; set; }
        public List<Song> FavoriteSongs { get; set; }

        public Person(int id, string firstName, string lastName, int age, Gener favoriteMusicType, List<Song> favoriteSongs)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Age = age;
            FavoriteMusicType = favoriteMusicType;
            FavoriteSongs = new List<Song>();
        }


        public void GetFavSongs()
        {
            if(FavoriteSongs.Count > 0)
            {
                foreach (var song in FavoriteSongs)
                {
                    Console.WriteLine(song);
                }
            }
            else
            {
                Console.WriteLine("{0} {1} doesn't like {2}", FirstName, LastName, FavoriteMusicType)
            }
        }

    }
}
