using MusicWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicWebApp.ViewModels
{
    public class AlbumViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Singer { get; set; }
        public DateTime Released { get; set; }
        public int NumberOfTracks { get; set; }
        public TimeSpan Length { get; set; }

        //public Singer Singer { get; set; }

        public static AlbumViewModel FromAlbum(Album album)
        {
            return new AlbumViewModel
            {
                Id = album.Id,
                Title = album.Title,
                Singer = album.Singer.Name,
                Released = album.Released,
                NumberOfTracks = album.NumberOfTracks
            };
        }
    }
}
