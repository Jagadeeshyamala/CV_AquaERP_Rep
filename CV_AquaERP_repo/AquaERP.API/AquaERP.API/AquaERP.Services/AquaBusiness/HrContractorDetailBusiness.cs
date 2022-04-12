using AquaERP.API.AquaERP.Services.AquaInterface;
using AquaERP.API.DTOs;
using AquaERP.API.Repository;
using AquaERP.Model.Models;
using System.Collections.Generic;

namespace AquaERP.API.AquaERP.Services.AquaBusiness
{
    public class HrContractorDetailBusiness : IHrContractorDetailBusiness
    {
        private UnitOfWork unitOfWork=new UnitOfWork();
        public void DeleteHrContractorDetail(System.Guid id)
        {
            var data = unitOfWork.HrContractorDetailRepository.GetTWithGuid(id);
            if (data != null)
            {
                data.DeletedDate = System.DateTime.Now;
                data.IsDeleted = true;
            }
            unitOfWork.HrContractorDetailRepository.Update(data);
            unitOfWork.Save();
        }

        public IEnumerable<ContractorDetailView> GetHrContractorDetail()
        {
            IEnumerable<HrContractorDetail> contractorDetail = new List<HrContractorDetail>();
            List<ContractorDetailView> contractorDetailViews = new List<ContractorDetailView>();

            //contractorDetail = unitOfWork.HrContractorDetailRepository.GetAll().Where(a => a.IsDeleted == false).ToList();

            foreach (var item in contractorDetail)
            {
                ContractorDetailView contractorDetailView = new ContractorDetailView();
                contractorDetailView.Id = item.Id;
                contractorDetailView.Name = item.Name;
                contractorDetailView.SeriesFrom = item.SeriesFrom;
                contractorDetailView.SeriesTo = item.SeriesTo;
                contractorDetailView.Address = item.Address;
                contractorDetailView.Contact = item.Contact;
                contractorDetailView.Doj = item.Doj;
                contractorDetailView.IsCompany = item.IsCompany;
                contractorDetailViews.Add(contractorDetailView);
            }

            return contractorDetailViews;
        }

        public void InsertHrContractorDetail(ContractorDetail input)
        {
            HrContractorDetail hrContractorDetail = new HrContractorDetail();
            hrContractorDetail.Id = System.Guid.NewGuid();
            hrContractorDetail.CreatedBy = System.Guid.NewGuid();
            hrContractorDetail.CreatedDate = System.DateTime.Now;
            //hrContractorDetail.DeptCode = input.DeptCode;
            //hrContractorDetail.DeptDetails = input.DeptDetails;
            //hrContractorDetail.ParentId = input.ParentId;
            hrContractorDetail.IsDeleted = false;

            unitOfWork.HrContractorDetailRepository.Insert(hrContractorDetail);
            unitOfWork.Save();
            //return unitOfWork.HrDepartmentMasterRepository.GetTWithGuid(input.Id);
        }

        public void UpdateHrContractorDetail(System.Guid id, ContractorDetail input)
        {
            var data = unitOfWork.HrContractorDetailRepository.GetTWithGuid(id);
            if (data != null)
            {
                //data.DeptDetails = input.DeptDetails;
                //data.CreatedBy = System.Guid.NewGuid();
                //data.CreatedDate = System.DateTime.Now;
                //data.DeptCode = input.DeptCode;
                //data.DeptDetails = input.DeptDetails;
                //data.ParentId = input.ParentId == input.Id ? data.ParentId : input.ParentId;
                unitOfWork.Save();
            }
            //return data;
        }
    }
}
