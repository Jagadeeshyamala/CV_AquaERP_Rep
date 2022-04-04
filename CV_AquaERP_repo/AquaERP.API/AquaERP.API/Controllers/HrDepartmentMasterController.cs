using AquaERP.API.AquaERP.Services.AquaBusiness;
using AquaERP.API.AquaERP.Services.AquaInterface;
using AquaERP.API.DTOs;
using AquaERP.Model.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace AquaERP.API.Controllers
{
    [Route("api/HrDepartmentMaster")]
    [ApiController]
    public class HrDepartmentMasterController : ControllerBase
    {

        IHrDepartmentMasterBusiness objDepartmentMaster = new HrDepartmentMasterBusiness();

        [HttpGet]
        [Route("GetHrDepartmentMaster")]
        public IEnumerable<HrDepartmentMaster> GetHrContractorDetails()
        {
            IEnumerable<HrDepartmentMaster> lstHrDepartmentMaster = new List<HrDepartmentMaster>();

            try
            {
                lstHrDepartmentMaster = objDepartmentMaster.GetHrDepartmentMaster();
            }
            catch (System.ApplicationException)
            {

                throw;
            }
            catch (System.Exception)
            {

                throw;
            }
            return lstHrDepartmentMaster;
        }

        [HttpPost]
        [Route("InsertHrDepartmentMaster")]
        public void InsertHrDepartmentMaster(DepartmentMaster data)
        {
            try
            {
                objDepartmentMaster.InsertHrDepartmentMaster(data);
            }
            catch (System.ApplicationException)
            {

                throw;
            }
            catch (System.Exception)
            {

                throw;
            }

        }
        [HttpPut]
        [Route("UpdateHrDepartmentMaster/{id}")]
        public void UpdateHrDepartmentMaster(System.Guid id, DepartmentMaster data)
        {
            try
            {
                objDepartmentMaster.UpdateHrDepartmentMaster(id, data);
            }
            catch (System.ApplicationException)
            {

                throw;
            }
            catch (System.Exception)
            {

                throw;
            }

        }

        [HttpDelete]
        [Route("DeleteHrContractorDetails/{id}")]
        public void DeleteHrContractorDetails(System.Guid id)
        {
            try
            {
                objDepartmentMaster.DeleteHrDepartmentMaster(id);
            }
            catch (System.ApplicationException)
            {

                throw;
            }
            catch (System.Exception)
            {

                throw;
            }
        }
    }
}
