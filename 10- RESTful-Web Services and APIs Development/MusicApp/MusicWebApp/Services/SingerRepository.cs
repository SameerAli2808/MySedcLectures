using MusicWebApp.Interfaces;
using MusicWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicWebApp.Services
{
    public class SingerRepository : ISingerRepository
    {
        private IEnumerable<Singer> _singersList;

        public SingerRepository()
        {
            _singersList = new List<Singer>()
            {
                new Singer(){ Id = 1, Name = "Celine Marie Claudette Dion", KnownAs = "Celine Dion", DateOfBirth = new DateTime(1968-03-30), PlaceOfBirth= "Charlemagne, Canada", Nationality = "Canadian", DateOfDeath = null, PlaceOfDeath = null},
                new Singer(){ Id = 2, Name = "Alecia Beth Moore", KnownAs = "Pink", DateOfBirth = new DateTime(1979-09-08), PlaceOfBirth= "Doylestown, Pennsylvania, United States", Nationality = "American", DateOfDeath = null, PlaceOfDeath = null},
                new Singer(){ Id = 3, Name = "Sia Kate Isobelle Furler", KnownAs = "Sia", DateOfBirth = new DateTime(1975-12-18), PlaceOfBirth= "Adelaide, Australia", Nationality = "Australian", DateOfDeath = null, PlaceOfDeath = null},
                new Singer(){ Id = 4, Name = "Vlatko Lozanoski", KnownAs = "Lozano", DateOfBirth = new DateTime(1985-06-27), PlaceOfBirth = "Kičevo, Macedonia", Nationality = "Macedonian", DateOfDeath = null, PlaceOfDeath = null },
            };
        }

        public IEnumerable<Singer> GetAllSingers()
        {
            return _singersList;
        }

        public Singer GetSinger(int id)
        {
            return _singersList.FirstOrDefault(s => s.Id == id);
        }
    }
}
