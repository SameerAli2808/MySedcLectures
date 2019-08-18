using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StringinizerWebApi.Models
{
    // [SW] This class is a model that we use in the application
    public class WordModel
    {
        public string UpperCase { get; set; }
        public string LowerCase { get; set; }
        public string TitleCase { get; set; }
        public string SentenceCase { get; set; }
        public string CamelCase { get; set; }
        public string PascalCase { get; set; }
        public string KebabCase { get; set; }
        public string UnderscoreCase { get; set; }

        public int SomeId { get; set; }

        // [SW] Since we've decided that we won't do the text transformations in a separate service, we've put
        // that code in our mode, thus turning it from an anemic model to a smart model.
        public void SetValues(string input)
        {
            SetUpper(input);
            SetLower(input);
            SetTitle(input);
            SetSentence(input);
            SetCamel(input);
            SetPascal(input);
            SetKebab(input);
            SetUnderscore(input);
        }

        public void SetUpper(string input)
        {
            UpperCase = input.ToUpper();
        }

        public void SetLower(string input)
        {
            LowerCase = input.ToLower();
        }

        public void SetTitle(string input)
        {
            TitleCase = CultureInfo.CurrentCulture.TextInfo.ToTitleCase(input.ToLower());
        }

        public void SetSentence(string input)
        {
            var s = input;
            string[] tokens = s.Split("");
            StringBuilder buffer = new StringBuilder();

            foreach (string token in tokens)
            {
                string currentToken = token.ToLower();
                currentToken = currentToken[0].ToString().ToUpper() + currentToken.Substring(1);
                buffer.Append(currentToken);
            }

            SentenceCase = buffer.ToString();
        }

        public void SetCamel(string input)
        {
            var functionName = SetPascal(input);
            string functionNameCC = $"{functionName.First().ToString().ToLowerInvariant()}{functionName.Substring(1)}";
            CamelCase = functionNameCC;
        }

        public string SetPascal(string input)
        {
            string functionName = input;
            functionName = CultureInfo.CurrentCulture.TextInfo.ToTitleCase(functionName)
                .Replace("_", string.Empty).Replace(" ", string.Empty);
            PascalCase = functionName;
            return functionName;
        }

        public void SetKebab(string input)
        {
            KebabCase = input.ToLower().Replace("_", "-").Replace(" ", "-");
        }

        public void SetUnderscore(string input)
        {
            UnderscoreCase = input.ToUpper().Replace(" ", "_");
        }
    }
}
