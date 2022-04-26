using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AquaERP.API.DTOs
{
    public class EmployeeMasterInfo
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
        public bool Messbill { get; set; }
        public bool? Onroll { get; set; }
        public string NameInTelugu { get; set; }
        public DateTime? RejoinDate { get; set; }
        public bool? IsInhouse { get; set; }
        public string ReligionCasteSubCaste { get; set; }
        public string EductionalQualification { get; set; }
        public double Height { get; set; }
        public int Weight { get; set; }
        public string HealthProblems { get; set; }
        public string IdentityRemarks { get; set; }
        public DateTime CreatedDate { get; set; }

        public List<EmpRefrenceInfo> empRefrenceInfo { get; set; }
        public List<EmpFamilyInfo> empFamilyInfos { get; set; }
        public List<EmpExperienceInfo> empExperienceInfos { get; set; }
        public List<EmpDocumentInfo> empDocumentInfos { get; set; }
    }
}
