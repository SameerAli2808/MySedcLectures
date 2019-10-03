using MusicWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicWebApp.Interfaces
{
    public interface ISongRepository
    {
        IEnumerable<Song> GetAllSongs();
        Song GetSong(int id);
        Song CreateSong();
        Song EditSong(Song song);
    }
}
