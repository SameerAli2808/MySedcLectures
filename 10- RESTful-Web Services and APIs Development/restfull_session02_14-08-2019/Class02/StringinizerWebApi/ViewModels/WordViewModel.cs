using StringinizerWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StringinizerWebApi.ViewModels
{
    public class WordViewModel
    {
        private WordViewModel() { }

        public string UpperCase { get; set; }
        public string LowerCase { get; set; }
        public string TitleCase { get; set; }
        public string SentenceCase { get; set; }
        public string CamelCase { get; set; }
        public string PascalCase { get; set; }
        public string KebabCase { get; set; }
        public string UnderscoreCase { get; set; }



        public static WordViewModel FromModel(WordModel model)
        {
            //if (model.UpperCase != null)
            //{
            //    return new WordViewModel
            //    {
            //        UpperCase = model.UpperCase
            //    };
            //}
            return new WordViewModel
            {
                UpperCase = model.UpperCase,
                LowerCase = model.LowerCase,
                TitleCase = model.TitleCase,
                SentenceCase = model.SentenceCase,
                CamelCase = model.CamelCase,
                PascalCase = model.PascalCase,
                KebabCase = model.KebabCase,
                UnderscoreCase = model.UnderscoreCase
            };
        }
    }
}
