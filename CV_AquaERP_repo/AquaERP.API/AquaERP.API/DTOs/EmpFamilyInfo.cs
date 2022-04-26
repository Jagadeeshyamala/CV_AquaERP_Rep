using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AquaERP.API.DTOs
{
    public class EmpFamilyInfo
    {
        public string Name { get; set; }
        public string RelationShip { get; set; }
        public int Age { get; set; }
        public string Ocupation { get; set; }
        public string Address { get; set; }
        public bool IsLive { get; set; }
        public string Type { get; set; }
        public bool Nominee { get; set; }

    }
}
