using AquaERP.API.AquaERP.Services.AquaBusiness;
using AquaERP.API.AquaERP.Services.AquaInterface;
using AquaERP.API.Controllers;
using AquaERP.API.DTOs;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Xunit;

namespace AquaERP.TestProject
{
    public class HrDepartmentMasterControllerTest
    {
        HrDepartmentMasterController _controller;
        IHrDepartmentMasterBusiness _interfaceDeptBusiness;

        public HrDepartmentMasterControllerTest()
        {
            _interfaceDeptBusiness = new HrDepartmentMasterBusiness();
            _controller = new HrDepartmentMasterController(_interfaceDeptBusiness);

        }

        [Fact]
        public void GetHrDepartmentMasterTest()
        {
            //Arrange
            //Act
            var result = _controller.GetHrContractorDetails();
            //Assert
            var list = result as OkObjectResult;

            Assert.IsType<List<DepartmentMasterView>>(list.Value);

            var listDepartmentMaster = list.Value as List<DepartmentMasterView>;

            Assert.Equal(12, listDepartmentMaster.Count);
        }

        [Fact]
        public void AddDepartmentTest()
        {

            //Arrange
            DepartmentMaster addDepartment = new DepartmentMaster()
            {
                Id = System.Guid.NewGuid(),
                DeptCode = "test69",
                DeptDetails = "test69",
                ParentId = new Guid("9D40BDD2-1420-4A9C-9D2F-3584BA657589")
            };

            //Act
           var createdResponse = _controller.InsertHrDepartmentMaster(addDepartment);

            //Assert
            Assert.IsType<CreatedAtActionResult>(createdResponse);

            //value of the result
           
            Assert.IsType<DepartmentMaster>(createdResponse);

            //check value of this department
            var addedepartment = createdResponse as DepartmentMaster;
            Assert.Equal(addDepartment.DeptCode, addedepartment.DeptCode);
            Assert.Equal(addDepartment.DeptDetails, addedepartment.DeptDetails);
            Assert.Equal(addDepartment.ParentId, addedepartment.ParentId);

            //OK RESULT TEST END

            //BADREQUEST AND MODELSTATE ERROR TEST START

            //Arrange
            var incompleteDepartment = new DepartmentMaster()
            {
                Id = System.Guid.NewGuid(),
                DeptCode = "test69",
                ParentId = new Guid("9D40BDD2-1420-4A9C-9D2F-3584BA657589")
            };


            //Act
            _controller.ModelState.AddModelError("DeptDetails", "DeptDetails is a requried filed");
          var badResponse = _controller.InsertHrDepartmentMaster(incompleteDepartment);

            //Assert
            Assert.IsType<BadRequestObjectResult>(badResponse);

            //BADREQUEST AND MODELSTATE ERROR TEST END
        }

        [Fact]
        public void UpdateDepartmentTest()
        {
            //OK RESULT TEST START

            //Arrange
            DepartmentMaster addDepartment = new DepartmentMaster()
            {
                Id = new Guid("9D40BDD2-1420-4A9C-9D2F-3584BA657589"),
                DeptCode = "test69",
                DeptDetails = "test69",
                ParentId = new Guid("9D40BDD2-1420-4A9C-9D2F-3584BA657589")
            };

            //Act
            var createdResponse = _controller.InsertHrDepartmentMaster(addDepartment);

            //Assert
            Assert.IsType<CreatedAtActionResult>(createdResponse);

            //value of the result
            var item = createdResponse;
            Assert.IsType<DepartmentMaster>(item);

            //check value of this department
            var addedepartment = item as DepartmentMaster;
            Assert.Equal(addDepartment.DeptCode, item.DeptCode);
            Assert.Equal(addDepartment.DeptDetails, item.DeptDetails);
            Assert.Equal(addDepartment.ParentId, item.ParentId);

            //OK RESULT TEST END

            //BADREQUEST AND MODELSTATE ERROR TEST START

            //Arrange
            var incompleteDepartment = new DepartmentMaster()
            {
                Id = new Guid("9D40BDD2-1420-4A9C-9D2F-3584BA657589"),
                DeptCode = "test69",
                ParentId = new Guid("9D40BDD2-1420-4A9C-9D2F-3584BA657589")
            };


            //Act
            _controller.ModelState.AddModelError("DeptDetails", "DeptDetails is a requried filed");
            var badResponse = _controller.InsertHrDepartmentMaster(incompleteDepartment);

            //Assert
            Assert.IsType<BadRequestObjectResult>(badResponse);

            //BADREQUEST AND MODELSTATE ERROR TEST END
        }


        [Theory]
        [InlineData("CC5F3281-4D46-4F44-B258-040A4499E2E2", "F64138E3-EA48-4544-A44E-2BF031330178")]
        public void RemoveDepartmentByIdTest(string guid1, string guid2)
        {
            //Arrange
            var validGuid = new Guid(guid1);
            var invalidGuid = new Guid(guid2);

            //Act
            _controller.DeleteHrContractorDetails(invalidGuid);


            var result = _controller.GetHrContractorDetails();           
            
            var listDepartmentMaster = result as List<DepartmentMasterView>;

            ////Assert
            //Assert.IsType<NotFoundResult>(notFoundResult);
            //Assert.Equal(13, listDepartmentMaster.Count);

            //Act
           _controller.DeleteHrContractorDetails(validGuid);


            //Assert
           // Assert.IsType<OkResult>(okResult);
            Assert.Equal(13, listDepartmentMaster.Count);
        }

    }
}

