using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AquaERP.Model.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using AquaERP.API.AquaERP.Services.AquaInterface;
using AquaERP.API.AquaERP.Services.AquaBusiness;
using System.Net.Http;
using AquaERP.API.DTOs;

namespace AquaERP.API.Controllers
{
    [Route("api/HrContractorDetail")]
    [ApiController]
    public class HrContractorDetailController : ControllerBase
    {
        IHrContractorDetailBusiness objContractorDetail = new HrContractorDetailBusiness();
        [HttpGet]
        [Route("GetHrContractorDetail")]
        public IEnumerable<ContractorDetailView> GetHrContractorDetails()
        {
            IEnumerable<ContractorDetailView> lstHrContractorDetail = new List<ContractorDetailView>();

            try
            {
                lstHrContractorDetail = objContractorDetail.GetHrContractorDetail();
            }
            catch (System.ApplicationException)
            {

                throw;
            }
            catch (System.Exception)
            {

                throw;
            }
            return lstHrContractorDetail;
        }

        [HttpPost]
        [Route("InsertContractorDetail")]
        public void InsertHrContractorDetail(ContractorDetail data)
        {
            try
            {
                objContractorDetail.InsertHrContractorDetail(data);
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
        [Route("UpdateHrContractorDetail/{id}")]
        public void UpdateHrContractorDetail(System.Guid id, ContractorDetail data)
        {
            try
            {
                objContractorDetail.UpdateHrContractorDetail(id, data);
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
        [Route("DeleteHrContractorDetail/{id}")]
        public void DeleteHrContractorDetails(System.Guid id)
        {
            try
            {
                objContractorDetail.DeleteHrContractorDetail(id);
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
