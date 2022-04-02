using AquaERP.API.AquaERP.Services.AquaInterface;
using AquaERP.API.Repository;
using AquaERP.Model.Models;
using System.Linq;
using System.Collections.Generic;
using AquaERP.API.DTOs;

namespace AquaERP.API.AquaERP.Services.AquaBusiness
{
    public class HrDepartmentMasterBusiness : IHrDepartmentMasterBusiness
    {

        private UnitOfWork unitOfWork = new UnitOfWork();

        public void DeleteHrDepartmentMaster(System.Guid id)
        {
            var data = unitOfWork.HrDepartmentMasterRepository.GetTWithGuid(id);
            if(data != null)
            {
                data.DeletedDate = System.DateTime.Now;
                data.IsDeleted = true;
            }
             unitOfWork.HrDepartmentMasterRepository.Update(data);
            unitOfWork.Save();
        }

        public IEnumerable<HrDepartmentMaster> GetHrDepartmentMaster()
        {
            return unitOfWork.HrDepartmentMasterRepository.GetAll().Where(a=>a.IsDeleted == false).ToList();
        }

        public void InsertHrDepartmentMaster(DepartmentMaster input)
        {
            HrDepartmentMaster hrDepartmentMaster = new HrDepartmentMaster();
            hrDepartmentMaster.Id = System.Guid.NewGuid();
            hrDepartmentMaster.CreatedBy = System.Guid.NewGuid();
            hrDepartmentMaster.CreatedDate = System.DateTime.Now;
            hrDepartmentMaster.DeptCode = input.DeptCode;
            hrDepartmentMaster.DeptDetails = input.DeptDetails;
            hrDepartmentMaster.ParentId = input.ParentId;
            hrDepartmentMaster.IsDeleted = false;

            unitOfWork.HrDepartmentMasterRepository.Insert(hrDepartmentMaster);
            unitOfWork.Save();
            //return unitOfWork.HrDepartmentMasterRepository.GetTWithGuid(input.Id);
        }

        public void UpdateHrDepartmentMaster(System.Guid id, DepartmentMaster input)
        {
            var data = unitOfWork.HrDepartmentMasterRepository.GetTWithGuid(id);
            if(data != null)
            {
                data.DeptDetails = input.DeptDetails;
                data.CreatedBy = System.Guid.NewGuid();
                data.CreatedDate = System.DateTime.Now;
                data.DeptCode = input.DeptCode;
                data.DeptDetails = input.DeptDetails;
                data.ParentId = input.ParentId;
                unitOfWork.Save();
            }
            //return data;
        }

    }
}
