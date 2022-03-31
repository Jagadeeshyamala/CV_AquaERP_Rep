using AquaERP.API.AquaERP.Services.AquaInterface;
using AquaERP.API.Repository;
using AquaERP.Model.Models;
using System.Collections.Generic;

namespace AquaERP.API.AquaERP.Services.AquaBusiness
{
    public class HrDepartmentMasterBusiness : IHrDepartmentMasterBusiness
    {

        private UnitOfWork unitOfWork = new UnitOfWork();

        public void DeleteHrDepartmentMaster(int id)
        {
             unitOfWork.HrDepartmentMasterRepository.Delete(id);
        }

        public IEnumerable<HrDepartmentMaster> GetHrDepartmentMaster()
        {
            return unitOfWork.HrDepartmentMasterRepository.GetAll();
        }

        public HrDepartmentMaster InsertHrDepartmentMaster(HrDepartmentMaster input)
        {
            unitOfWork.HrDepartmentMasterRepository.Insert(input);
            unitOfWork.Save();
            return unitOfWork.HrDepartmentMasterRepository.GetTWithGuid(input.Id);
        }

        public HrDepartmentMaster UpdateHrDepartmentMaster(System.Guid id, HrDepartmentMaster input)
        {
            var data = unitOfWork.HrDepartmentMasterRepository.GetTWithGuid(id);
            if(data != null)
            {
                data.DeptDetails = input.DeptDetails;
                unitOfWork.Save();
            }
            return data;
        }

    }
}
