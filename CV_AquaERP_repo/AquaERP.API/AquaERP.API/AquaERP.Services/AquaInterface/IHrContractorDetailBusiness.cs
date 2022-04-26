using AquaERP.API.DTOs;
using AquaERP.Model.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace AquaERP.API.AquaERP.Services.AquaInterface
{
    public interface IHrContractorDetailBusiness
    {
        IEnumerable<ContractorDetailView> GetHrContractorDetail();
        void InsertHrContractorDetail(ContractorDetail input);
        void UpdateHrContractorDetail(System.Guid id, ContractorDetail input);
        void DeleteHrContractorDetail(System.Guid id);
    }
}
