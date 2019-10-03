using Microsoft.EntityFrameworkCore;
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
        private readonly MusicContext _db;

        public SongRepository(MusicContext musicContext)
        {
            _db = musicContext;
        }

        public Song CreateSong()
        {
            throw new NotImplementedException();
        }

        public Song EditSong(Song song)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Song> GetAllSongs()
        {
            return _db.Song
                .Include(p => p.Singer)
                .Include(p => p.Album);
        }

        public Song GetSong(int id)
        {
            return _db.Song
                .Include(p => p.Singer)
                .Include(p => p.Album)
                .FirstOrDefault(s => s.Id == id);
        }
    }
}
