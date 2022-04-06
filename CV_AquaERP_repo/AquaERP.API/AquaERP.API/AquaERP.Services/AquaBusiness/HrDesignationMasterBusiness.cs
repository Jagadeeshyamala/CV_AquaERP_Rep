using AquaERP.API.AquaERP.Services.AquaInterface;
using AquaERP.API.Repository;
using AquaERP.Model.Models;
using System.Linq;
using System.Collections.Generic;
using AquaERP.API.DTOs;
namespace AquaERP.API.AquaERP.Services.AquaBusiness
{
    public class HrDesignationMasterBusiness:IHrDesignationMasterBusiness
    {
        private UnitOfWork unitOfWork = new UnitOfWork();

        public void DeleteHrDesignationMaster(System.Guid id)
        {
            var data = unitOfWork.HrDesignationMasterRepository.GetTWithGuid(id);
            if (data != null)
            {
                data.DeletedDate = System.DateTime.Now;
                data.IsDeleted = true;
            }
            unitOfWork.HrDesignationMasterRepository.Update(data);
            unitOfWork.Save();
        }

        public IEnumerable<DesignationMasterView> GetHrDesignationMaster()
        {
            IEnumerable<DesignationMasterView> designationMasterViews = new List<DesignationMasterView>();

            designationMasterViews = unitOfWork.HrDesignationMasterRepository.GetAll().Where(a => a.IsDeleted == false)
                .Select(d => new DesignationMasterView
                {
                    Id = d.Id,
                    DesgCode = d.DesgCode,
                    DesgDetails = d.DesgDetails,
                    QualificationReq = d.QualificationReq,
                    ExperienceReq = d.ExperienceReq,
                    DesgInTelugu = d.DesgInTelugu
                }).ToList();

            return designationMasterViews;
        }

        public void InsertHrDesignationMaster(DesignationMaster input)
        {
            HrDesignationMaster hrDesignationMaster = new HrDesignationMaster();
            hrDesignationMaster.Id = System.Guid.NewGuid();
            hrDesignationMaster.CreatedBy = System.Guid.NewGuid();
            hrDesignationMaster.CreatedDate = System.DateTime.Now;
            hrDesignationMaster.DesgCode = input.DesgCode;
            hrDesignationMaster.DesgDetails = input.DesgDetails;
            hrDesignationMaster.QualificationReq = input.QualificationReq;
            hrDesignationMaster.ExperienceReq = input.ExperienceReq;
            hrDesignationMaster.DesgInTelugu = input.DesgInTelugu;
            hrDesignationMaster.IsDeleted = false;

            unitOfWork.HrDesignationMasterRepository.Insert(hrDesignationMaster);
            unitOfWork.Save();
            //return unitOfWork.HrDepartmentMasterRepository.GetTWithGuid(input.Id);
        }

        public void UpdateHrDesignationMaster(System.Guid id, DesignationMaster input)
        {
            var data = unitOfWork.HrDesignationMasterRepository.GetTWithGuid(id);
            if (data != null)
            {
                data.DesgCode = input.DesgCode;
                data.CreatedBy = System.Guid.NewGuid();
                data.CreatedDate = System.DateTime.Now;
                data.DesgDetails = input.DesgDetails;
                data.QualificationReq = input.QualificationReq;
                data.ExperienceReq = input.ExperienceReq;
                data.DesgInTelugu = input.DesgInTelugu;
                unitOfWork.Save();
            }
            //return data;
        }
    }
}
