using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AquaERP.API.DTOs
{
    public class EmpExperienceInfo
    {

        public string CompanyName { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public double Salary { get; set; }
        public string Designation { get; set; }
        public double WorkExperience { get; set; }
        public string ReasonForLeaving { get; set; }

    }
}
