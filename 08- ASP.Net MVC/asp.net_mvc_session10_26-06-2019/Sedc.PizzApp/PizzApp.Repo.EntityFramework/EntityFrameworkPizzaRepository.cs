﻿using Microsoft.EntityFrameworkCore;
using PizzApp.Models;
using PizzApp.Repositories.Abstractions;
using System;
using System.Collections.Generic;

namespace PizzApp.Repo.EntityFramework
{
    public class EntityFrameworkPizzaRepository : IPizzaRepository
    {
        //private readonly ApplicationDatabase Db;

        public Pizza Create(Pizza model)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<Pizza> GetAllPizzas()
        {
            throw new NotImplementedException();
        }

        public Pizza GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Pizza Update(Pizza model)
        {
            throw new NotImplementedException();
        }
    }
}