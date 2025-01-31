﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary
{
    public class Dog
    {
        public string Name { get; set; }
        public Color Color { get; set; }
        public int Age { get; set; }
        public Race Race { get; set; }

        public Dog(string name, Color color, int age, Race race)
        {
            Name = name;
            Color = color;
            Age = age;
            Race = race;
        }
    }
}
