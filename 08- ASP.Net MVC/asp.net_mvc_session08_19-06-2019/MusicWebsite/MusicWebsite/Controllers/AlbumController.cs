using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MusicWebsite.Models;

namespace MusicWebsite.Controllers
{
    public class AlbumController : Controller
    {
        private static readonly List<Album> albums = new List<Album>
            {
               new Album{ Id=1, Name="Second Song", MainSinger = "The Cure", image = "~/img/bg-img/a1.jpg"    },
               new Album{ Id=2, Name="Underground", MainSinger = "Sam Smith", image = "~/img/bg-img/a2.jpg"    },
               new Album{ Id=3, Name="First", MainSinger = "Will I am", image = "~/img/bg-img/a3.jpg"    },
               new Album{ Id=4, Name="Second Song", MainSinger = "The Cure", image = "~/img/bg-img/a4.jpg"    },
               new Album{ Id=5, Name="The Album", MainSinger = "DJ SMITH", image = "~/img/bg-img/a5.jpg"    },
               new Album{ Id=6, Name="Unplugged", MainSinger = "The Ustopable", image = "~/img/bg-img/a6.jpg"    },
               new Album{ Id=7, Name="Songs", MainSinger = "Beyonce", image = "~/img/bg-img/a7.jpg"    },
               new Album{ Id=8, Name="Underground", MainSinger = "Aam Smith", image = "~/img/bg-img/a8.jpg"    },
               new Album{ Id=9, Name="First", MainSinger = "Will I am", image = "~/img/bg-img/a9.jpg"    },
               new Album{ Id=10, Name="The Album", MainSinger = "DJ SMITH", image = "~/img/bg-img/a10.jpg"    },
               new Album{ Id=11, Name="Unplugged", MainSinger = "The Ustopable", image = "~/img/bg-img/a11.jpg"    },
               new Album{ Id=12, Name="Songs", MainSinger = "Beyonce", image = "~/img/bg-img/a12.jpg"    },
            };

        public AlbumController()
        {
        }

        public IActionResult Index()
        {
            return View(albums.ToList());
        }

        public IActionResult Details(int id)
        {
            var album = albums.FirstOrDefault(p => p.Id == id);
            return View(album);
        }

    }



}