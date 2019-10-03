using Microsoft.EntityFrameworkCore;
using MusicWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicWebApp.Services
{
    public class MusicContext : DbContext
    {
        public DbSet<Album> Album { get; set; }
        public DbSet<Singer> Singer { get; set; }
        public DbSet<Song> Song { get; set; }

        public MusicContext(DbContextOptions<MusicContext> options) :
            base(options)
        {

        }
    }
}
