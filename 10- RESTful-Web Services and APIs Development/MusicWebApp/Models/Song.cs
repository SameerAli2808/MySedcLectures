using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicWebApp.Models
{
    public class Song
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int SingerId { get; set; }
        public int AlbumId { get; set; }
        public DateTime Released { get; set; }
        public int TrackNumber { get; set; }
        public string Genre { get; set; }
        public TimeSpan Length { get; set; }

        public Album Album { get; set; }

        public Singer Singer { get; set; }
    }
}
