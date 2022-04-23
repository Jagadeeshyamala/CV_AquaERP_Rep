using AquaERP.API.AquaERP.Services.AquaBusiness;
using AquaERP.API.AquaERP.Services.AquaInterface;
using AquaERP.API.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AquaERP.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HREmployeeMasterController : ControllerBase
    {
        IHrEmployeeMasterBusiness objEmployeeMaster = new HrEmployeeMasterBusiness();

        [HttpGet]
        [Route("GetHrDesignationMaster")]
        public IEnumerable<DesignationMasterView> GetHrDesignationMaster()
        {
            IEnumerable<DesignationMasterView> lstHrDesignationMaster = new List<DesignationMasterView>();

            try
            {
                lstHrDesignationMaster = objEmployeeMaster.GetHrDesignationMaster();
            }
            catch (System.ApplicationException)
            {

                throw;
            }
            catch (System.Exception)
            {

                throw;
            }
            return lstHrDesignationMaster;
        }

    }
}
