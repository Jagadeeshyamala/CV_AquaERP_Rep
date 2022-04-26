using System;
using System.Collections.Generic;

#nullable disable

namespace AquaERP.Model.Models
{
    public partial class HrPersonalParticular
    {
        public Guid Id { get; set; }
        public Guid PersonId { get; set; }
        public string ReligionCasteSubCaste { get; set; }
        public string EductionalQualification { get; set; }
        public double Height { get; set; }
        public int Weight { get; set; }
        public string HealthProblems { get; set; }
        public string IdentityRemarks { get; set; }
        public DateTime CreatedDate { get; set; }
        public Guid CreatedBy { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public Guid? LastUpdatedBy { get; set; }
        public DateTime? DeletedDate { get; set; }
        public Guid? DeletedBy { get; set; }
        public bool IsDeleted { get; set; }
    }
}
