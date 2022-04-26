using AquaERP.API.AquaERP.Services.AquaBusiness;
using AquaERP.API.AquaERP.Services.AquaInterface;
using AquaERP.API.DTOs;
using AquaERP.Model.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace AquaERP.API.Controllers
{
    [Route("api/HrDesignationMaster")]
    [ApiController]
    public class HrDesignationMasterController : Controller
    {
        IHrDesignationMasterBusiness objDesignationMaster = new HrDesignationMasterBusiness();
        IHrDepartmentMasterBusiness objDepartmentMaster = new HrDepartmentMasterBusiness();
        [HttpGet]
        [Route("GetHrDesignationMaster")]
        public IEnumerable<DesignationMasterView> GetHrDesignationDetails()
        {
            IEnumerable<DesignationMasterView> lstHrDesignationMaster = new List<DesignationMasterView>();

            try
            {
                lstHrDesignationMaster = objDesignationMaster.GetHrDesignationMaster();
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

        [HttpPost]
        [Route("InsertHrDesignationMaster")]
        public void InsertHrDesignationMaster(DesignationMaster data)
        {
            try
            {
                objDesignationMaster.InsertHrDesignationMaster(data);
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
        [Route("UpdateHrDesignationMaster/{id}")]
        public void UpdateHrDesignationMaster(System.Guid id, DesignationMaster data)
        {
            try
            {
                objDesignationMaster.UpdateHrDesignationMaster(id, data);
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
        [Route("DeleteHrDesignationDetails/{id}")]
        public void DeleteHrDesignationDetails(System.Guid id)
        {
            try
            {
                objDesignationMaster.DeleteHrDesignationMaster(id);
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
