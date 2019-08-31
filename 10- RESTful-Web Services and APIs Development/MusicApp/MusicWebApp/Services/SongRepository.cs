using MusicWebApp.Interfaces;
using MusicWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicWebApp.Services
{
    public class SongRepository : ISongRepository
    {
        public IEnumerable<Song> GetAllSingers()
        {
            throw new NotImplementedException();
        }

        public Song GetSinger(int id)
        {
            throw new NotImplementedException();
        }
    }
}
