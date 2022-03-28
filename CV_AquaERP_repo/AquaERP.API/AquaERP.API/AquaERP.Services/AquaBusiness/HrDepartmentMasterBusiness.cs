using AquaERP.API.AquaERP.Services.AquaInterface;
using AquaERP.API.Repository;
using AquaERP.Model.Models;
using System.Collections.Generic;

namespace AquaERP.API.AquaERP.Services.AquaBusiness
{
    public class HrDepartmentMasterBusiness : IHrDepartmentMasterBusiness
    {

        private UnitOfWork unitOfWork = new UnitOfWork();
        public IEnumerable<HrDepartmentMaster> GetHrDepartmentMaster()
        {
            return unitOfWork.HrDepartmentMasterRepository.GetAll();
        }

        public HrDepartmentMaster HrDepartmentMasterInsert(HrDepartmentMaster input)
        {
            unitOfWork.HrDepartmentMasterRepository.Insert(input);
            unitOfWork.Save();
            return unitOfWork.HrDepartmentMasterRepository.GetTWithGuid(input.Id);
        }
    }
}
