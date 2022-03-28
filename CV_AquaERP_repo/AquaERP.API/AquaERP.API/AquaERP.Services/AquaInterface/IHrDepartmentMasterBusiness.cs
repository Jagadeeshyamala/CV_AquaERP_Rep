using AquaERP.Model.Models;
using System.Collections.Generic;

namespace AquaERP.API.AquaERP.Services.AquaInterface
{
    public interface IHrDepartmentMasterBusiness
    {
        IEnumerable<HrDepartmentMaster> GetHrDepartmentMaster();
        HrDepartmentMaster HrDepartmentMasterInsert(HrDepartmentMaster input);
    }
}
