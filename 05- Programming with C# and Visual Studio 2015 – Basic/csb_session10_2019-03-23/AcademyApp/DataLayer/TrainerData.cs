using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AcademyApp_ClassLibrary;


namespace DataLayer
{
    public class TrainerData
    {
        public List<Trainer> PupulateTrainers()
        {
            List<Trainer> trainersList = new List<Trainer>();
            Trainer trainer01 = new Trainer(Gender.Male, "martin", "Martin", "Panovski", "112233", "01-01-1990", "Skopje", "071 234 567");
            trainersList.Add(trainer01);

            return trainersList;
        }
    }
}
