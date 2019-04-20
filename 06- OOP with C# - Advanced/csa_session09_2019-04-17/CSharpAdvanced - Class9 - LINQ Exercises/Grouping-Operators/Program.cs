using System;
using System.Linq;

namespace Grouping_Operators
{
    class Program
    {
        static void Main(string[] args)
        {

            //Use LINQ Group By method to partition a list of numbers by their remainder when divided by 5 (both Lambda/SQL approach)
            int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };

            var numbersByRemainderSql = (from n in numbers
                                         group n by n % 5 into p
                                         orderby p.Key
                                         select new { Remainder = p.Key, Numbers = p });
            var numbersByRemainderLinq = numbers.GroupBy(n => n % 5)
                .OrderBy(p => p.Key)
                .Select(p => new { Reminder = p.Key, Numbers = p });

            foreach (var itemSqlReminder in numbersByRemainderSql)
            {
                Console.WriteLine("Reminder: {0}",itemSqlReminder.Remainder);
                foreach (var itemSqlNumber in itemSqlReminder.Numbers)
                {
                    Console.Write("{0}, ",itemSqlNumber);
                }
                Console.WriteLine("");
            }

            foreach (var itemLinqReminder in numbersByRemainderLinq)
            {
                Console.WriteLine("Reminder: {0}", itemLinqReminder.Reminder);
                foreach (var itemSqlNumber in itemLinqReminder.Numbers)
                {
                    Console.Write("{0}, ", itemSqlNumber);
                }
                Console.WriteLine("");
            }


            //Use LINQ Group By method to partition a list of words by their first letter (both Lambda/SQL approach)
            //Print the results with added ordering by the first letter
            string[] words = { "blueberry", "chimpanzee", "abacus", "banana", "apple", "cheese" };

            var wordsOrderbySql = (from w in words
                                   group w by w[0] into p
                                   orderby p.Key
                                   select new { FirstLetter = p.Key, Words = p });
            var wordsOrderbyLinq = words.GroupBy(w => w[0]).OrderBy(w => w.Key).Select(p => new { FirstLetter = p.Key, Words = p });

            foreach (var itemSqlLetter in wordsOrderbySql)
            {
                Console.WriteLine("First Letter: {0}", itemSqlLetter.FirstLetter);
                foreach (var itemSqlWord in itemSqlLetter.Words)
                {
                    Console.Write("{0}, ", itemSqlWord);
                }
                Console.WriteLine("");
            }

            foreach (var itemLinqLetter in wordsOrderbyLinq)
            {
                Console.WriteLine("First Letter: {0}", itemLinqLetter.FirstLetter);
                foreach (var itemLinqWord in itemLinqLetter.Words)
                {
                    Console.Write("{0}, ", itemLinqWord);
                }
                Console.WriteLine("");
            }

            Console.ReadLine();
        }
    }
}