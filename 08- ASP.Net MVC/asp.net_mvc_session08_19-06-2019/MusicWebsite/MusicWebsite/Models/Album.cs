using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicWebsite.Models
{
    public class Album
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string MainSinger { get; set; }
        public DateTime DateOfRelease { get; set; }
        public int NumberOfSongs { get; set; }
        public int Length { get; set; }
        public string image { get; set; }
        public decimal Price { get; set; }
    }
}
