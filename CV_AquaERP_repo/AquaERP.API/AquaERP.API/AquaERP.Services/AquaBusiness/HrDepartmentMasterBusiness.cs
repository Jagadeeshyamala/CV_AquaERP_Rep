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

        public IEnumerable<DepartmentMasterView> GetHrDepartmentMaster()
        {
            IEnumerable<DepartmentMasterView> departmentMasterViews = new List<DepartmentMasterView>();

            departmentMasterViews = unitOfWork.HrDepartmentMasterRepository.GetAll().Where(a => a.IsDeleted == false)
                .Select(d => new DepartmentMasterView {
                    Id = d.Id,
                    DeptCode=d.DeptCode,
                    DeptDetails=d.DeptDetails,
                    CreatedDate=d.CreatedDate,
                    ParentName= unitOfWork.HrDepartmentMasterRepository.GetAll().Where(p=>p.Id == d.ParentId).Select(q=>q.DeptDetails).FirstOrDefault()
                }).ToList();

            return departmentMasterViews;
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
