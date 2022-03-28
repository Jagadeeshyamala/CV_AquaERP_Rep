using AquaERP.Model.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace AquaERP.API.AquaERP.Services.AquaInterface
{
    public interface IHrContractorDetailBusiness
    {
        IEnumerable<HrContractorDetail> GetHrContractorDetail();
        HrContractorDetail HrContractorDetailInsert(HrContractorDetail input);
    }
}
