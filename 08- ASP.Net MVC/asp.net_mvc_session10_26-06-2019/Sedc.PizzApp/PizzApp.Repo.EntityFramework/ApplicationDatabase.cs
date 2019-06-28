using Microsoft.EntityFrameworkCore;
using PizzApp.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PizzApp.Repo.EntityFramework
{
    public class ApplicationDatabase : DbContext
    {
        public ApplicationDatabase()
        {
            //base.Database.BeginTransaction();
            //base.Database.RollbackTransaction();
            //base.Database.CommitTransaction();
        }
        public DbSet<Pizza> Pizzas { get; set; }
    }
}
