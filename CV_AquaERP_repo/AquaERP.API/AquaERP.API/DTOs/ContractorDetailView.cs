using System;

namespace AquaERP.API.DTOs
{
    public class ContractorDetailView
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public long? SeriesFrom { get; set; }
        public long? SeriesTo { get; set; }
        public string Address { get; set; }
        public string Contact { get; set; }
        public DateTime? Doj { get; set; }
        public bool IsCompany { get; set; }
    }
}
