using MusicWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicWebApp.Interfaces
{
    interface ISongRepository
    {
        IEnumerable<Song> GetAllSingers();
        Song GetSinger(int id);
    }
}
