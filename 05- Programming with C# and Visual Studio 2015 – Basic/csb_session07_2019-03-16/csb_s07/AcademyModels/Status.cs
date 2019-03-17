using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AcademyModels
{
    public enum Status
    {
        Draft, // Draft = 5 ......... if we want to start from different value, will effect all the others
        Pending, // Oending = 8 ........ if we want to set a specific value
        Sent,
        Fail
    }
}
