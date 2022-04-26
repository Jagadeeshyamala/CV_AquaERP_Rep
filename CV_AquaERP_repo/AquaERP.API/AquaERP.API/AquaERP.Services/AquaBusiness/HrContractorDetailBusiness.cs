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
                //ContractorDetailView contractorDetailView = new ContractorDetailView();
                //contractorDetailView.Id = item.Id;
                //contractorDetailView.Name = item.Name;
                //contractorDetailView.SeriesFrom = item.SeriesFrom;
                //contractorDetailView.SeriesTo = item.SeriesTo;
                //contractorDetailView.Address = item.Address;
                //contractorDetailView.Contact = item.Contact;
                //contractorDetailView.Doj = item.Doj;
                //contractorDetailView.IsCompany = item.IsCompany;
                //contractorDetailViews.Add(contractorDetailView);
            }

            return contractorDetailViews;
        }

        public void InsertHrContractorDetail(ContractorDetail input)
        {
            HrContractorDetail hrContractorDetail = new HrContractorDetail();
            hrContractorDetail.Id = System.Guid.NewGuid();
            hrContractorDetail.CreatedBy = System.Guid.NewGuid();
            hrContractorDetail.CreatedDate = System.DateTime.Now;
            hrContractorDetail.Name = input.Name;
            hrContractorDetail.SeriesFrom = input.SeriesFrom;
            hrContractorDetail.SeriesTo = input.SeriesTo;
            hrContractorDetail.Address = input.Address;
            hrContractorDetail.Contact = input.Contact;
            hrContractorDetail.LabourLicense = input.LabourLicense;
            hrContractorDetail.Doj = input.Doj;
            hrContractorDetail.Document = null;
            hrContractorDetail.Extension = null;
            hrContractorDetail.IsCompany = input.IsCompany;
            hrContractorDetail.PaymentMode = input.PaymentMode;
            hrContractorDetail.PercentOnNetsal = input.PercentOnNetsal;
            hrContractorDetail.AmtOnPresents = input.AmtOnPresents;
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
                data.LastUpdatedBy = System.Guid.NewGuid();
                data.LastUpdatedDate = System.DateTime.Now;
                data.Name = input.Name;
                data.SeriesFrom = input.SeriesFrom;
                data.SeriesTo = input.SeriesTo;
                data.Address = input.Address;
                data.Contact = input.Contact;
                data.LabourLicense = input.LabourLicense;
                data.Doj = input.Doj;
                data.Document = null;
                data.Extension = null;
                data.IsCompany = input.IsCompany;
                data.PaymentMode = input.PaymentMode;
                data.PercentOnNetsal = input.PercentOnNetsal;
                data.AmtOnPresents = input.AmtOnPresents;
                unitOfWork.Save();
            }
            //return data;
        }
    }
}
