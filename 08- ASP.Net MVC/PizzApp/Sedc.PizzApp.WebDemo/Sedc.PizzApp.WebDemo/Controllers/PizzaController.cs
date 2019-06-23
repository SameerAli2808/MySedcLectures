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

        private readonly IEnumerable<string> pizzas =  new List<string>
            {
                "capri", "tuna","margarita","pepperoni"
            };

        public PizzaController()
        {

        }

    public IActionResult GetAll()
        {
            ViewData["Pizzas"]
            ViewBag.Pizzas = new List<string>
            {
                "capri", "tuna","margarita","pepperoni"
            };
            return View();
        }

        //get pizza that is longer than 4 character
        public IActionResult GetPizza4()
        {
            ViewBag.Pizzas = new List<string>
            {
                "capri", "tuna","margarita","pepperoni"
            };
            return View();
        }

        //Other way of do that
        public IActionResult GetPizza4Other()
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