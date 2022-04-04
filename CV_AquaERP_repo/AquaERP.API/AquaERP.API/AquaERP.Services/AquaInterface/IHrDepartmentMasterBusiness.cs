using AquaERP.API.DTOs;
using AquaERP.Model.Models;
using System.Collections.Generic;

namespace AquaERP.API.AquaERP.Services.AquaInterface
{
    public interface IHrDepartmentMasterBusiness
    {
        IEnumerable<HrDepartmentMaster> GetHrDepartmentMaster();
        void InsertHrDepartmentMaster(DepartmentMaster input);
        void UpdateHrDepartmentMaster(System.Guid id, DepartmentMaster input);
        void DeleteHrDepartmentMaster(System.Guid id);
    }
}
