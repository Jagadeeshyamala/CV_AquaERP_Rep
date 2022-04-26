using System;

namespace AquaERP.API.DTOs
{
    public class ContractorDetail
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
    }
}
