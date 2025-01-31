﻿using Microsoft.EntityFrameworkCore;
using PizzApp.Models;
using PizzApp.Repositories.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PizzApp.Repositories.EntityFramework
{
    public class EntityFrameworkPizzaRepository : IPizzaRepository
    {
        private readonly ApplicationDatabase Database;

        public EntityFrameworkPizzaRepository()
        {
            var optionsBuilder = new DbContextOptionsBuilder<ApplicationDatabase>();
            optionsBuilder.UseSqlServer(@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=PizzaDatabase;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            Database = new ApplicationDatabase(optionsBuilder.Options);
        }

        public Pizza Create(Pizza model)
        {
            model.Id = default;
            Database.Pizzas.Add(model);
            int rowsAffected = Database.SaveChanges();
            return model;
        }

        public void Delete(int id)
        {
            var pizzaToRemove = Database.Pizzas.SingleOrDefault(x => x.Id == id);

            if (pizzaToRemove != null)
            {
                Database.Pizzas.Remove(pizzaToRemove);
                Database.SaveChanges();
            }
        }

        public List<Pizza> GetAllPizzas()
        {
            return Database.Pizzas.ToList();
        }

        public Pizza GetById(int id)
        {
            return Database.Pizzas
                .FirstOrDefault(pizza => pizza.Id == id);
        }

        public Pizza Update(Pizza model)
        {
            throw new NotImplementedException();
        }
    }
}
