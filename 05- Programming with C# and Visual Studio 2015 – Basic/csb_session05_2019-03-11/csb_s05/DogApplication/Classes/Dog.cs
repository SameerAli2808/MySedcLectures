using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DogApplication.Classes
{
    class Dog
    {
        public string name;
        public string race;
        public string color;

        public string dogEats()
        {
            return $"{name} is eating now!";
        }

        public string dogPlaying()
        {
            return $"{name} is playing now!";
        }

        public string ChaseTail()
        {
            return $"{name} is chasing its tail now!";
        }

    }
}
