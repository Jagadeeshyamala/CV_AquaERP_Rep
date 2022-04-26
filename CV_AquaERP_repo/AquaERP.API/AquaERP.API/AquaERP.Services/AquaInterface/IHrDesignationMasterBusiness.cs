using AquaERP.API.DTOs;
using System.Collections.Generic;

namespace AquaERP.API.AquaERP.Services.AquaInterface
{
    public interface IHrDesignationMasterBusiness
    {
        IEnumerable<DesignationMasterView> GetHrDesignationMaster();
        void InsertHrDesignationMaster(DesignationMaster input);
        void UpdateHrDesignationMaster(System.Guid id, DesignationMaster input);
        void DeleteHrDesignationMaster(System.Guid id);
    }
}
