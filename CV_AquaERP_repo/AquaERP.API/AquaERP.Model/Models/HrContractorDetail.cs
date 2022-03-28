using System;
using System.Collections.Generic;

#nullable disable

namespace AquaERP.Model.Models
{
    public partial class HrContractorDetail
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public long? SeriesFrom { get; set; }
        public long? SeriesTo { get; set; }
        public string Address { get; set; }
        public string Contact { get; set; }
        public string LabourLicense { get; set; }
        public DateTime? Doj { get; set; }
        public byte[] Document { get; set; }
        public string Extension { get; set; }
        public bool IsCompany { get; set; }
        public byte PaymentMode { get; set; }
        public byte? PercentOnNetsal { get; set; }
        public short? AmtOnPresents { get; set; }
        public DateTime CreatedDate { get; set; }
        public Guid CreatedBy { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public Guid? LastUpdatedBy { get; set; }
        public DateTime? DeletedDate { get; set; }
        public Guid? DeletedBy { get; set; }
        public bool IsDeleted { get; set; }//
    }
}
