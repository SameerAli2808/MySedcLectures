using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicWebApp.Models
{
    public class Album
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int SingerId { get; set; }
        public DateTime Released { get; set; }
        public int NumberOfTracks { get; set; }
        public TimeSpan Length { get; set; }

        public Singer Singer { get; set; }
    }
}
