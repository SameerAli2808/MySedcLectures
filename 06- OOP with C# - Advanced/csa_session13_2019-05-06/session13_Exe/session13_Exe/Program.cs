using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace session13_Exe
{
    class Program
    {
        static void PourCoffee()
        {
            Console.WriteLine("Pour one cup of coffee!");
        }

        static async Task Main(string[] args)
        {
            PourCoffee();
            Console.WriteLine("coffee is ready");
            var eggsTask = FryEggsAsync(2);
            var baconTask = FryBaconAsync(3);
            var toastTask = makeToastWithButterAndJamAsync(2);

            var allTasks = new List<Task> { eggsTask, baconTask, toastTask };
            while (allTasks.Any())
            {
                Task finished = await Task.WhenAny(allTasks);
                if (finished == eggsTask)
                {
                    Console.WriteLine("eggs are ready");
                    allTasks.Remove(eggsTask);
                    var eggs = await eggsTask;
                }
                else if (finished == baconTask)
                {
                    Console.WriteLine("bacon is ready");
                    allTasks.Remove(baconTask);
                    var bacon = await baconTask;
                }
                else if (finished == toastTask)
                {
                    Console.WriteLine("toast is ready");
                    allTasks.Remove(toastTask);
                    var toast = await toastTask;
                }
                else
                    allTasks.Remove(finished);
            }
            Console.WriteLine("Breakfast is ready!");

            async Task<Toast> makeToastWithButterAndJamAsync(int number)
            {
                var plainToast = await ToastBreadAsync(number);
                ApplyButter(plainToast);
                ApplyJam(plainToast);
                return plainToast;
            }

            async Task FryEggsAsync(int number)
            {
                var 
            }
        }
    }
}
