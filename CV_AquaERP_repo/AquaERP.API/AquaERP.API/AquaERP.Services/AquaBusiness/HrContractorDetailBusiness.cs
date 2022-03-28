using AquaERP.API.AquaERP.Services.AquaInterface;
using AquaERP.API.Repository;
using AquaERP.Model.Models;
using System.Collections.Generic;

namespace AquaERP.API.AquaERP.Services.AquaBusiness
{
    public class HrContractorDetailBusiness : IHrContractorDetailBusiness
    {
        private UnitOfWork unitOfWork=new UnitOfWork();
        public IEnumerable<HrContractorDetail> GetHrContractorDetail()
        {
            return unitOfWork.HrContractorDetailRepository.GetAll();
        }
        public HrContractorDetail HrContractorDetailInsert(HrContractorDetail input)
        {
            unitOfWork.HrContractorDetailRepository.Insert(input);
            return unitOfWork.HrContractorDetailRepository.GetTWithGuid(input.Id);

        }
    }
}
