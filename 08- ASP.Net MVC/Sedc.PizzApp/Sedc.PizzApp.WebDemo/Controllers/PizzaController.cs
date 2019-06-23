using Microsoft.AspNetCore.Mvc;
using Sedc.PizzApp.WebDemo.Models;
using System.Collections.Generic;
using System.Linq;

namespace Sedc.PizzApp.WebDemo.Controllers
{
    public class PizzaController : Controller
    {
        private readonly IEnumerable<Pizza> pizzas;

        public PizzaController()
        {
            pizzas = new List<Pizza>
            {
               new Pizza{ Id=1, Name="capri", Size = "Large", Price = 250},
               new Pizza{ Id=2, Name="tuna", Size = "Large", Price = 250},
               new Pizza{ Id=3, Name="margarita", Size = "Large", Price = 250},
               new Pizza{ Id=4, Name="pepperoni", Size = "Large", Price = 250},
            };
        }

        public IActionResult GetAll()
        {
            //TIPP: how foreach works
            //IEnumerator<string> enumerator = pizzas.GetEnumerator();
            //enumerator.Reset();
            //while (enumerator.MoveNext())
            //{
            //    //do something with the current value;
            //    //enumerator.Current;
            //}

            //ViewData["pizzas"] = pizzas;

            return View(pizzas.ToList());
        }

        public IActionResult Details(int id)
        {
            return View(pizzas.FirstOrDefault(p => p.Id == id));
        }

        //get pizza that is longer than 4 character
        public IActionResult GetPizzaLongerThan4()
        {
            ViewBag.Pizzas = new List<string>
            {
                "capri", "tuna","margarita","pepperoni"
            }.Where(p => p.Length > 4);
            return View("~/Views/Pizza/GetAll.cshtml");
        }


        public IActionResult TestView()
        {
            return View();
        }
    }
}
