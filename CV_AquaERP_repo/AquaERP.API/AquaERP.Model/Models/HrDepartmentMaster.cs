using System;
using System.Collections.Generic;

#nullable disable

namespace AquaERP.Model.Models
{
    public partial class HrDepartmentMaster
    {
        public HrDepartmentMaster()
        {
            InverseParent = new HashSet<HrDepartmentMaster>();
        }

        public Guid Id { get; set; }
        public string DeptCode { get; set; }
        public string DeptDetails { get; set; }
        public Guid? ParentId { get; set; }
        public DateTime CreatedDate { get; set; }
        public Guid CreatedBy { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public Guid? LastUpdatedBy { get; set; }
        public DateTime? DeletedDate { get; set; }
        public Guid? DeletedBy { get; set; }
        public bool IsDeleted { get; set; }

        public virtual HrDepartmentMaster Parent { get; set; }
        public virtual ICollection<HrDepartmentMaster> InverseParent { get; set; }
    }
}
