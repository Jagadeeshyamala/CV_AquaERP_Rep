using AquaERP.API.AquaERP.Services.AquaInterface;
using AquaERP.API.DTOs;
using AquaERP.API.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AquaERP.API.AquaERP.Services.AquaBusiness
{
    public class HrEmployeeMasterBusiness : IHrEmployeeMasterBusiness
    {
        private readonly UnitOfWork unitOfWork = new UnitOfWork();

        public IEnumerable<ContractorDetailView> GetHrContractorDetail()
        {
            List<ContractorDetailView> contractorDetailView = new List<ContractorDetailView>();

            contractorDetailView = unitOfWork.HrContractorDetailRepository.GetAll().Where(a => a.IsDeleted == false).Select(a => new ContractorDetailView
            {
                ContractorID = a.Id,
                ContractorName = a.Name
            }).ToList();

            return contractorDetailView;
        }

        public IEnumerable<DesignationMasterView> GetHrDesignationMaster()
        {
            List<DesignationMasterView> designationMasterViews = new List<DesignationMasterView>();

            designationMasterViews = unitOfWork.HrDesignationMasterRepository.GetAll().Where(a => a.IsDeleted == false).Select(a=> new DesignationMasterView
            {
                DesgCode=a.DesgCode,
                DesgDetails=a.DesgDetails
            }).ToList();

            return designationMasterViews;
        }
    }
}
