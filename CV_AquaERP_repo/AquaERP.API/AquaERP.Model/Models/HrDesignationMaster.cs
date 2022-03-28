using System;
using System.Collections.Generic;

#nullable disable

namespace AquaERP.Model.Models
{
    public partial class HrDesignationMaster
    {
        public Guid Id { get; set; }
        public string DesgCode { get; set; }
        public string DesgDetails { get; set; }
        public string QualificationReq { get; set; }
        public string ExperienceReq { get; set; }
        public string DesgInTelugu { get; set; }
        public DateTime CreatedDate { get; set; }
        public Guid CreatedBy { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public Guid? LastUpdatedBy { get; set; }
        public DateTime? DeletedDate { get; set; }
        public Guid? DeletedBy { get; set; }
        public bool IsDeleted { get; set; }
    }
}
