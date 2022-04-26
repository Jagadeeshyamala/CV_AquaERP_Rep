using AquaERP.API.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AquaERP.API.AquaERP.Services.AquaInterface
{
   public interface IHrEmployeeMasterBusiness
    {
        IEnumerable<DesignationMasterView> GetHrDesignationMaster();
        IEnumerable<ContractorDetailView> GetHrContractorDetail();
    }
}
