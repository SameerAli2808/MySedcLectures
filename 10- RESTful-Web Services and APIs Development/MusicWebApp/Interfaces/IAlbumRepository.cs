using MusicWebApp.Models;
using MusicWebApp.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicWebApp.Interfaces
{
    public interface IAlbumRepository
    {
        IEnumerable<Album> GetAllAlbums();
        Album GetAlbum(int id);
        Album CreateAlbum();
        Album EditAlbum(Album album);
    }
}
