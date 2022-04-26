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

        IHrDepartmentMasterBusiness _objDepartmentMaster;

        public HrDepartmentMasterController(IHrDepartmentMasterBusiness objDepartmentMaster)
        {
            _objDepartmentMaster = objDepartmentMaster;
        }

        [HttpGet]
        [Route("GetHrDepartmentMaster")]
        public IEnumerable<DepartmentMasterView> GetHrContractorDetails()
        {
            IEnumerable<DepartmentMasterView> lstHrDepartmentMaster = new List<DepartmentMasterView>();

            try
            {
                lstHrDepartmentMaster = _objDepartmentMaster.GetHrDepartmentMaster();
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
        public DepartmentMaster InsertHrDepartmentMaster(DepartmentMaster data)
        {
            try
            {
                _objDepartmentMaster.InsertHrDepartmentMaster(data);
            }
            catch (System.ApplicationException)
            {

                throw;
            }
            catch (System.Exception)
            {

                throw;
            }

            return data;

        }
        [HttpPut]
        [Route("UpdateHrDepartmentMaster/{id}")]
        public void UpdateHrDepartmentMaster(System.Guid id, DepartmentMaster data)
        {
            try
            {
                _objDepartmentMaster.UpdateHrDepartmentMaster(id, data);
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
                _objDepartmentMaster.DeleteHrDepartmentMaster(id);
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
