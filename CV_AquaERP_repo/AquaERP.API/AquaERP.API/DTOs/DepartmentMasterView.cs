using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AquaERP.API.DTOs
{
    public class DepartmentMasterView
    {
        public Guid Id { get; set; }
        public string DeptCode { get; set; }
        public string DeptDetails { get; set; }
        public string ParentName { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
