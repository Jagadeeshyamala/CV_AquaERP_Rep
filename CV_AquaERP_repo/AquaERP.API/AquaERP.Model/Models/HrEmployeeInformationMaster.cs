using System;
using System.Collections.Generic;

#nullable disable

namespace AquaERP.Model.Models
{
    public partial class HrEmployeeInformationMaster
    {
        public Guid Id { get; set; }
        public string BiometricId { get; set; }
        public string InternalId { get; set; }
        public string Name { get; set; }
        public string FatherOrhusband { get; set; }
        public DateTime? Dob { get; set; }
        public string PresentAddress { get; set; }
        public string PermanentAddress { get; set; }
        public string Gender { get; set; }
        public string ContactNo { get; set; }
        public string AltContactNo { get; set; }
        public string MaritalStatus { get; set; }
        public int? NoDependents { get; set; }
        public string DeptCode { get; set; }
        public string DesgCode { get; set; }
        public string SkillIds { get; set; }
        public DateTime? ConfirmationDate { get; set; }
        public DateTime? Doj { get; set; }
        public string IhExperience { get; set; }
        public decimal? TotalExperience { get; set; }
        public string PfNo { get; set; }
        public string EsiNo { get; set; }
        public string AadharNo { get; set; }
        public string PassportNo { get; set; }
        public string PanCard { get; set; }
        public string BlodGroup { get; set; }
        public string EmpImageUrl { get; set; }
        public string Uanno { get; set; }
        public bool? IsActive { get; set; }
        public string EmploymentUnder { get; set; }
        public string Division { get; set; }
        public long? ContractorId { get; set; }
        public string ImageId { get; set; }
        public bool Messbill { get; set; }
        public bool? Onroll { get; set; }
        public string NameInTelugu { get; set; }
        public DateTime? RejoinDate { get; set; }
        public bool? IsInhouse { get; set; }
        public bool IsLeft { get; set; }
        public DateTime? LeftDate { get; set; }
        public DateTime? InactiveDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public Guid CreatedBy { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public Guid? LastUpdatedBy { get; set; }
        public DateTime? DeletedDate { get; set; }
        public Guid? DeletedBy { get; set; }
        public bool IsDeleted { get; set; }
    }
}
