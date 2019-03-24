using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MovieRaiting_ClassLibrary;

namespace MovieRaiting
{
    class Program
    {
        public static void showMovies(Cinema cinema)
        {
            Console.WriteLine("");
            Console.WriteLine("Which list of movies in {0} you would like to check?", cinema.Name);
            Console.WriteLine("choose ### 1 ### for All movies");
            Console.WriteLine("choose ### 2 ### for Comedy");
            Console.WriteLine("choose ### 3 ### for Horror");
            Console.WriteLine("choose ### 4 ### for Action");
            Console.WriteLine("choose ### 5 ### for Drama");
            Console.WriteLine("choose ### 6 ### for SciFi");
            string chooseList = Console.ReadLine();
            List<Movie> moviesGenre = new List<Movie>();

            switch (chooseList)
            {
                case "1":
                    moviesGenre = cinema.ListOfMovies;
                    printInfo("All", Genre.Action, cinema, moviesGenre);

                    //Console.WriteLine("");
                    //Console.WriteLine("The list of all movies in {0} is:", cinema.Name);
                    //moviesGenre = cinema.ListOfMovies;
                    //for (int i = 0; i < moviesGenre.Count; i++)
                    //{
                    //    Console.WriteLine("{0}:: {1}", i + 1, cinema.ListOfMovies[i].Title);
                    //};
                    break;
                case "2":
                    moviesGenre = cinema.ListOfMovies.Where(x => x.Genre == Genre.Comedy).ToList();
                    printInfo("Comedy", Genre.Comedy, cinema, moviesGenre);

                    //Console.WriteLine("");
                    //Console.WriteLine("The list of Comedy movies in {0} is:", cinema.Name);
                    
                    //for (int i = 0; i < moviesGenre.Count; i++)
                    //{
                    //    Console.WriteLine("{0}:: {1}", i + 1, moviesGenre[i].Title);
                    //};
                    break;
                case "3":
                    moviesGenre = cinema.ListOfMovies.Where(x => x.Genre == Genre.Horror).ToList();
                    printInfo("Horror", Genre.Horror, cinema, moviesGenre);
                    break;
                case "4":
                    moviesGenre = cinema.ListOfMovies.Where(x => x.Genre == Genre.Action).ToList();
                    printInfo("Action", Genre.Action, cinema, moviesGenre);
                    break;
                case "5":
                    moviesGenre = cinema.ListOfMovies.Where(x => x.Genre == Genre.Drama).ToList();
                    printInfo("Drama", Genre.Drama, cinema, moviesGenre);
                    break;
                case "6":
                    moviesGenre = cinema.ListOfMovies.Where(x => x.Genre == Genre.SciFi).ToList();
                    printInfo("Drama", Genre.Drama, cinema, moviesGenre);
                    break;
                default:
                    showMovies(cinema);
                    break;
            }

            
            
        }

        public static void printInfo(string genreName, Genre genre, Cinema cinema, List<Movie> moviesGenre)
        {
            Console.WriteLine("");
            Console.WriteLine("The list of {0} movies in {0} is:", genreName, cinema.Name);
            for (int i = 0; i < moviesGenre.Count; i++)
            {
                Console.WriteLine("{0}:: {1}", i + 1, cinema.ListOfMovies[i].Title);
            };

            int movieTitle = 0;

            do
            {
                Console.WriteLine("");
                Console.WriteLine("Which movie would you like to watch?");
                string movieTitleString = Console.ReadLine();
                bool isMovieTitle = int.TryParse(movieTitleString, out movieTitle);
                if (movieTitle <= moviesGenre.Count && movieTitle > 0)
                {
                    Cinema.MoviePlaying(moviesGenre[movieTitle - 1].Title);
                }

            } while (movieTitle > moviesGenre.Count || movieTitle <= 0);
        }

        static void Main(string[] args)
        {
            Movie movie1 = new Movie("Scary Movie", Genre.Comedy, 4);
            Movie movie2 = new Movie("American Pie", Genre.Comedy, 4);
            Movie movie3 = new Movie("Saw", Genre.Horror, 4);
            Movie movie4 = new Movie("The Shining", Genre.Horror, 4);
            Movie movie5 = new Movie("Rambo", Genre.Action, 4);
            Movie movie6 = new Movie("The Terminator", Genre.Action, 4);
            Movie movie7 = new Movie("Forrest Gump", Genre.Drama, 4);
            Movie movie8 = new Movie("12 Angru Men", Genre.Drama, 4);
            Movie movie9 = new Movie("Passengers", Genre.SciFi, 4);
            Movie movie10 = new Movie("Interstellar", Genre.SciFi, 4);
            List<Movie> MovieSet1 = new List<Movie>() { movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10 };
            Movie movie11 = new Movie("Airplane", Genre.Comedy, 4);
            Movie movie12 = new Movie("Johnny English", Genre.Comedy, 4);
            Movie movie13 = new Movie("The Ring", Genre.Horror, 4);
            Movie movie14 = new Movie("Sinister", Genre.Horror, 4);
            Movie movie15 = new Movie("RoboCop", Genre.Action, 4);
            Movie movie16 = new Movie("Judge Dredd", Genre.Action, 4);
            Movie movie17 = new Movie("The Social Network", Genre.Drama, 4);
            Movie movie18 = new Movie("The Shawshank Redemption", Genre.Drama, 4);
            Movie movie19 = new Movie("Inception", Genre.SciFi, 4);
            Movie movie20 = new Movie("Avatar", Genre.SciFi, 4);
            List<Movie> MovieSet2 = new List<Movie>() { movie11, movie12, movie13, movie14, movie15, movie16, movie17, movie18, movie19, movie20 };


            Cinema cinema1 = new Cinema("Cineplex");
            cinema1.Halls = new List<int>() { 1, 2, 3, 4 };
            cinema1.ListOfMovies = MovieSet1;
            Cinema cinema2 = new Cinema("Milenium");
            cinema2.Halls = new List<int>() { 1, 2 };
            cinema2.ListOfMovies = MovieSet2;

            string chooseCinema = "0";
            do
            {
                Console.WriteLine("");
                Console.WriteLine("Welcome to Cinema Application");
                Console.WriteLine("Wich cinema you like to check?");
                Console.WriteLine("choose ### 1 ### for Cineplex");
                Console.WriteLine("choose ### 2 ### for Milenium");
                chooseCinema = Console.ReadLine();

                if(chooseCinema == "1" || chooseCinema == "2")
                {
                    if(chooseCinema == "1")
                    {
                        showMovies(cinema1);
                        break;
                    }
                    else
                    {
                        showMovies(cinema2);
                        break;
                    }
                }

            } while (chooseCinema != "1" || chooseCinema != "2");


            Console.ReadLine();
        }
    }
}
