using PizzaApp.Models;
using System;
using System.Collections.Generic;

namespace PizzaApp.Repositories.Abstractions
{
    public interface IPizzaRepository
    {
        List<Pizza> GetAllPizzas();
    }
}
