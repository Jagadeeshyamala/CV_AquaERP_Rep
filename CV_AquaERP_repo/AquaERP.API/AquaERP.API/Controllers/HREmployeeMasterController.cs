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
        IHrEmployeeMasterBusiness _objEmployeeMaster;

        public HREmployeeMasterController(IHrEmployeeMasterBusiness objEmployeeMaster)
        {
            _objEmployeeMaster = objEmployeeMaster;
        }

        [HttpGet]
        [Route("GetHrDesignationMaster")]
        public IEnumerable<DesignationMasterView> GetHrDesignationMaster()
        {
            IEnumerable<DesignationMasterView> lstHrDesignationMaster = new List<DesignationMasterView>();

            try
            {
                lstHrDesignationMaster = _objEmployeeMaster.GetHrDesignationMaster();
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

        [HttpGet]
        [Route("GetHrContractorDetails")]
        public IEnumerable<ContractorDetailView> GetHrContractorDetails()
        {
            IEnumerable<ContractorDetailView> lstHrContractorDetailView = new List<ContractorDetailView>();

            try
            {
                lstHrContractorDetailView = _objEmployeeMaster.GetHrContractorDetail();
            }
            catch (System.ApplicationException)
            {

                throw;
            }
            catch (System.Exception)
            {

                throw;
            }
            return lstHrContractorDetailView;
        }

        [HttpGet]
        [Route("InsertEmployeeInfo")]
        public void InsertEmployeeInfo(EmployeeMasterInfo employeeMasterInfo)
        {

        }
    }
}
