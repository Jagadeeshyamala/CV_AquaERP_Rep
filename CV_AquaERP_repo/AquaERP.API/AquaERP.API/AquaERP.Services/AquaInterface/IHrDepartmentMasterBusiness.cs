using AquaERP.Model.Models;
using System.Collections.Generic;

namespace AquaERP.API.AquaERP.Services.AquaInterface
{
    public interface IHrDepartmentMasterBusiness
    {
        IEnumerable<HrDepartmentMaster> GetHrDepartmentMaster();
        HrDepartmentMaster InsertHrDepartmentMaster(HrDepartmentMaster input);
        HrDepartmentMaster UpdateHrDepartmentMaster(System.Guid id, HrDepartmentMaster input);
        void DeleteHrDepartmentMaster(int id);
    }
}
