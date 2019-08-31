using MusicWebApp.Interfaces;
using MusicWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicWebApp.Services
{
    public class AlbumRepository : IAlbumRepository
    {
        public IEnumerable<Album> GetAllSingers()
        {
            throw new NotImplementedException();
        }

        public Album GetSinger(int id)
        {
            throw new NotImplementedException();
        }
    }
}
