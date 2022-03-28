using AquaERP.Model.Models;
using System;
namespace AquaERP.API.Repository
{
    public class UnitOfWork : IDisposable
    {
        private bool disposed=false;
        private AquaERPContext aquaERPContext = new AquaERPContext();
        private Repository<HrContractorDetail> hrContractorDetailRepository;
        private Repository<HrDepartmentMaster> hrDepartmentMasterRepository;
        private Repository<HrDesignationMaster> hrDesignationMasterRepository;
        private Repository<HrEmployeeInformationMaster> hrEmployeeInformationMasterRepository;
        public Repository<HrContractorDetail> HrContractorDetailRepository
        {
            get 
            {
                if(this.hrContractorDetailRepository == null)
                {
                    this.hrContractorDetailRepository = new Repository<HrContractorDetail>(this.aquaERPContext);
                }
                return this.hrContractorDetailRepository;
            }
        }

        public Repository<HrDepartmentMaster> HrDepartmentMasterRepository
        {

            get
            {
                if (this.hrDepartmentMasterRepository == null)
                {
                    this.hrDepartmentMasterRepository = new Repository<HrDepartmentMaster>(this.aquaERPContext);
                }
                return this.hrDepartmentMasterRepository;
            }
        }

        public Repository<HrDesignationMaster> HrDesignationMasterRepository
        {

            get
            {
                if (this.hrDesignationMasterRepository == null)
                {
                    this.hrDesignationMasterRepository = new Repository<HrDesignationMaster>(this.aquaERPContext);
                }
                return this.HrDesignationMasterRepository;
            }
        }

        public Repository<HrEmployeeInformationMaster> HrEmployeeInformationMasterRepository
        {

            get
            {
                if (this.hrEmployeeInformationMasterRepository == null)
                {
                    this.hrEmployeeInformationMasterRepository = new Repository<HrEmployeeInformationMaster>(this.aquaERPContext);
                }
                return this.hrEmployeeInformationMasterRepository;
            }
        }

        public void Save()
        {
            this.aquaERPContext.SaveChanges();
        }
        public void Dispose()
        {
            this.Dispose(true);
            GC.SuppressFinalize(this);
        }
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    this.aquaERPContext.Dispose();
                }
            }
            this.disposed = true;
        }
    }
}
