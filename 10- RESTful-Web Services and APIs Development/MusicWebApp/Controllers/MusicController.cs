using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MusicWebApp.Interfaces;
using MusicWebApp.Models;
using MusicWebApp.Services;
using MusicWebApp.ViewModels;

namespace MusicWebApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MusicController : ControllerBase
    {
        private ISingerRepository _singerRepository;
        private ISongRepository _songRepository;
        private IAlbumRepository _albumRepository;

        public MusicController(ISingerRepository singerRepository,
            ISongRepository songRepository,
            IAlbumRepository albumRepository)
        {
            this._singerRepository = singerRepository;
            this._songRepository = songRepository;
            this._albumRepository = albumRepository;
        }

        // GET api/music/getallsinngers
        [HttpGet]
        public ActionResult<IEnumerable<Singer>> GetAllSingers()
        {
            return Ok(_singerRepository.GetAllSingers());
        }

        // GET api/music/getsinger/id
        [HttpGet]
        [Route("{id}")]
        public ActionResult<Singer> GetSinger(int id)
        {
            return Ok(_singerRepository.GetSinger(id));
        }

        // GET api/music/getallsongs
        [HttpGet]
        public ActionResult<IEnumerable<Song>> GetAllSongs()
        {
            var result = _songRepository.GetAllSongs();
            return Ok(result);
        }

        // GET api/music/getsong/id
        [HttpGet]
        [Route("{id}")]
        public ActionResult<Singer> GetSong(int id)
        {
            return Ok(_songRepository.GetSong(id));
        }

        // GET api/music/getallalbums
        [HttpGet]
        public ActionResult<IEnumerable<AlbumViewModel>> GetAllAlbums()
        {
            return Ok(_albumRepository.GetAllAlbums());
        }

        // GET api/music/getalbum/id
        [HttpGet]
        [Route("{id}")]
        public ActionResult<Album> GetAlbum(int id)
        {
            return Ok(_albumRepository.GetAlbum(id));
        }












        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
