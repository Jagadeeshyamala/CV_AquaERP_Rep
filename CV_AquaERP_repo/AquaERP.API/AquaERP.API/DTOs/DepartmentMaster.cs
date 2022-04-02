using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AquaERP.API.DTOs
{
    public class DepartmentMaster
    {
        public Guid Id { get; set; }
        public string DeptCode { get; set; }
        public string DeptDetails { get; set; }
        public Guid? ParentId { get; set; }
    }
}
