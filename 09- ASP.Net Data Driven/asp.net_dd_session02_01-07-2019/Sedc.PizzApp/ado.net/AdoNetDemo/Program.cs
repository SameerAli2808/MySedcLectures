
using System;
using System.Data.SqlClient;

namespace ado.net
{
    class Program
    {
        private const string connStr = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=PizzaDatabase01;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
        static void Main(string[] args)
        {
            var connection = new SqlConnection("");
            connection.Open();
            //////////////

            string query = "select count(*) from Pizzas";
            var command = new SqlCommand(query, connection);
            var numberOfPizzas  = command.ExecuteScalar();
            Console.WriteLine(numberOfPizzas);


            /////////////
            connection.Close();
        }
    }
}
