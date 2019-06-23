using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicWebsite.Models
{
    public class Song
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Singer { get; set; }
        public string Genre { get; set; }
        public DateTime DateOfRelease { get; set; }
        public int Length { get; set; }
        public decimal Price { get; set; }
    }
}
