using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicWebApp.Models
{
    public class Singer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string KnownAs { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string PlaceOfBirth { get; set; }
        public string Nationality { get; set; }
        public DateTime? DateOfDeath { get; set; }
        public string PlaceOfDeath { get; set; }
    }
}
