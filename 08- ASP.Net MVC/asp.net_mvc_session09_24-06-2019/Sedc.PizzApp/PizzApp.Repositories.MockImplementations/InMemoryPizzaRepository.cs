using PizzApp.Models;
using PizzApp.Repositories.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace PizzApp.Repositories.MockImplementations
{
    public class InMemoryPizzaRepository : IPizzaRepository
    {
        private static readonly List<Pizza> pizzas = new List<Pizza>
            {
               new Pizza{ Id=1, Name="capri" },
               new Pizza{ Id=2, Name="tuna" },
               new Pizza{ Id=3, Name="margarita" },
               new Pizza{ Id=4, Name="pepperoni" },
            };

        public List<Pizza> GetAllPizzas()
        {
            return pizzas.ToList();
        }
        public Pizza GetById(int id)
        {
            return pizzas.FirstOrDefault(p => p.Id == id);
        }
        public Pizza Create(Pizza Model)
        {
            //submit the pizza from form
            var newPizza = new Pizza
            {
                Id = pizzas.Max(pizza => pizza.Id) + 1,
                Name = Model.Name
            };
            pizzas.Add(newPizza);

            return newPizza;
        }

        public Pizza Edit(int Id, Pizza Model)
        {
            var pizza = GetById(Id);
            pizza.Name = Model.Name;

            return pizza;
        }

        public void Delete(int id)
        {
            var pizza = GetById(id);
            pizzas.Remove(pizza);
        }

    }
}
