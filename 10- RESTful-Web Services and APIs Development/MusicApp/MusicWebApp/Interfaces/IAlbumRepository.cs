using MusicWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicWebApp.Interfaces
{
    interface IAlbumRepository
    {
        IEnumerable<Album> GetAllSingers();
        Album GetSinger(int id);
    }
}
