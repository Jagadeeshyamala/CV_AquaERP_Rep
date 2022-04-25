using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AquaERP.Model.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using AquaERP.API.AquaERP.Services.AquaInterface;
using AquaERP.API.AquaERP.Services.AquaBusiness;
using System.Net.Http;


namespace AquaERP.API.Controllers
{
    [Route("api/HrContractorDetail")]
    [ApiController]
    public class HrContractorDetailController : ControllerBase
    {
        IHrContractorDetailBusiness _objContractorDetail;

        public HrContractorDetailController(IHrContractorDetailBusiness objContractorDetail)
        {
            _objContractorDetail = objContractorDetail;
        }

        [HttpGet]
        [Route("GetHrContractorDetails")]
        public IEnumerable<HrContractorDetail> GetHrContractorDetails()
        {
            IEnumerable<HrContractorDetail> lstContractorDetails = new List<HrContractorDetail>();

            try
            {
                lstContractorDetails = _objContractorDetail.GetHrContractorDetail();
            }
            catch (System.ApplicationException)
            {

                throw;
            }
            catch (System.Exception)
            {

                throw;
            }
            return lstContractorDetails;
        }
        [HttpGet]
        [Route("HrContractorDetailsInsert")]
        public HrContractorDetail HrContractorDetailsInsert(HrContractorDetail input)
        {
            try
            {
                var dd = _objContractorDetail.HrContractorDetailInsert(input);
                return dd;
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
