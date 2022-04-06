using System;

namespace AquaERP.API.DTOs
{
    public class DesignationMasterView
    {
        public Guid Id { get; set; }
        public string DesgCode { get; set; }
        public string DesgDetails { get; set; }
        public string QualificationReq { get; set; }
        public string ExperienceReq { get; set; }
        public string DesgInTelugu { get; set; }
    }
}
