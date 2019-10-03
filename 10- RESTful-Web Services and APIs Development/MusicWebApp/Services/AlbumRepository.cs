using Microsoft.EntityFrameworkCore;
using MusicWebApp.Interfaces;
using MusicWebApp.Models;
using MusicWebApp.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicWebApp.Services
{
    public class AlbumRepository : IAlbumRepository
    {
        private readonly MusicContext _db;

        public AlbumRepository(MusicContext musicContext)
        {
            _db = musicContext;
        }
        
        public IEnumerable<Album> GetAllAlbums()
        {
            return _db.Album
                .Include(a => a.Singer);
        }

        public Album GetAlbum(int id)
        {
            return _db.Album
                .Include(a => a.Singer)
                .FirstOrDefault(a => a.Id == id);
        }

        public Album CreateAlbum()
        {
            throw new NotImplementedException();
        }

        public Album EditAlbum(Album album)
        {
            throw new NotImplementedException();
        }
    }
}
