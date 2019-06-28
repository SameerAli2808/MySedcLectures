using PizzApp.Models;
using System.Collections.Generic;

namespace PizzApp.Repositories.Abstractions
{
    public interface IPizzaRepository
    {
        List<Pizza> GetAllPizzas();
        Pizza GetById(int id);
        Pizza Create(Pizza pizza);
        Pizza Edit(int id, Pizza pizza);
        void Delete(int id);
    }
}
