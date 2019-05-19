using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary
{
    public class Member : User
    {
        public Member() { }

        public Member(int pn, string firstName, string lastName, string email, string password) 
            : base(pn, firstName, lastName, email, password) => Role = Role.Member;
    }
}
