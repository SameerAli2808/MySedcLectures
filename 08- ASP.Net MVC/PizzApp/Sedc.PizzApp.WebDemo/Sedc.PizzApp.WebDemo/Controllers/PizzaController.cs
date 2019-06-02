using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Sedc.Pizza.WebDemo.Controllers
{
    public class PizzaController : Controller
    {
        //public IActionResult GetAll() => View();
        /*public IActionResult GetAll()
        {
            return View();
        }*/

        public IActionResult GetAll()
        {
            ViewBag.Pizzas = new List<string>
            {
                "capri", "tuna","margarita","pepperoni"
            };
            return View();
        }

        public IActionResult TestView()
        {
            return View();
        }

    }
}