using Microsoft.AspNetCore.Mvc;
using StringinizerWebApi.Models;
using StringinizerWebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StringinizerWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StringsController : ControllerBase
    {
        [HttpGet("{value}")]
        public ActionResult<WordViewModel> Get(string value)
        {
            var result = new WordModel();
            result.SetValues(value);
            return WordViewModel.FromModel(result);
        }

        [HttpGet("{type}/{value}")]
        public ActionResult<WordViewModel> Get(string type, string value)
        {
            var result = new WordModel();

            switch (type)
            {
                case "upperCase":
                    result.SetUpper(value);
                    return WordViewModel.FromModel(result);
                case "lowerCase":
                    result.SetLower(value);
                    return WordViewModel.FromModel(result);
                case "titleCase":
                    result.SetTitle(value);
                    return WordViewModel.FromModel(result);
                case "sentenceCase":
                    result.SetSentence(value);
                    return WordViewModel.FromModel(result);
                case "camelCase":
                    result.SetCamel(value);
                    return WordViewModel.FromModel(result);
                case "pascalCase":
                    result.SetPascal(value);
                    return WordViewModel.FromModel(result);
                case "kebabCase":
                    result.SetKebab(value);
                    return WordViewModel.FromModel(result);
                case "underscoreCase":
                    result.SetUnderscore(value);
                    return WordViewModel.FromModel(result);
                default:
                    result.SetValues(value);
                    return WordViewModel.FromModel(result);
            }
            
            //return UnprocessableEntity($"Cannot map {type} to a valid operation");
        }

    }
}
