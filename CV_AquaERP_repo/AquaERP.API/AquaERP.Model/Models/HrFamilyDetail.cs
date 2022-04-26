using System;
using System.Collections.Generic;

#nullable disable

namespace AquaERP.Model.Models
{
    public partial class HrFamilyDetail
    {
        public Guid Id { get; set; }
        public Guid PersonId { get; set; }
        public string Name { get; set; }
        public string RelationShip { get; set; }
        public int Age { get; set; }
        public string Ocupation { get; set; }
        public string Address { get; set; }
        public bool IsLive { get; set; }
        public string Type { get; set; }
        public bool Nominee { get; set; }
        public DateTime CreatedDate { get; set; }
        public Guid CreatedBy { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public Guid? LastUpdatedBy { get; set; }
        public DateTime? DeletedDate { get; set; }
        public Guid? DeletedBy { get; set; }
        public bool IsDeleted { get; set; }
    }
}
