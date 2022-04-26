using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace AquaERP.Model.Models
{
    public partial class AquaERPContext : DbContext
    {
        public AquaERPContext()
        {
        }

        public AquaERPContext(DbContextOptions<AquaERPContext> options)
            : base(options)
        {
        }

        public virtual DbSet<HrContractorDetail> HrContractorDetails { get; set; }
        public virtual DbSet<HrDepartmentMaster> HrDepartmentMasters { get; set; }
        public virtual DbSet<HrDesignationMaster> HrDesignationMasters { get; set; }
        public virtual DbSet<HrEmployeeDocument> HrEmployeeDocuments { get; set; }
        public virtual DbSet<HrEmployeeInformationMaster> HrEmployeeInformationMasters { get; set; }
        public virtual DbSet<HrEmployeeReference> HrEmployeeReferences { get; set; }
        public virtual DbSet<HrFamilyDetail> HrFamilyDetails { get; set; }
        public virtual DbSet<HrPersonExperience> HrPersonExperiences { get; set; }
        public virtual DbSet<HrPersonalParticular> HrPersonalParticulars { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=PC;Database=CV_ERP_Aqua;User Id=sa;Password=123;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<HrContractorDetail>(entity =>
            {
                entity.ToTable("HR_ContractorDetails");

                entity.Property(e => e.Id).HasDefaultValueSql("(newid())");

                entity.Property(e => e.Address)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Contact)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Doj)
                    .HasColumnType("date")
                    .HasColumnName("DOJ");

                entity.Property(e => e.Extension)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LabourLicense)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<HrDepartmentMaster>(entity =>
            {
                entity.ToTable("HR_DepartmentMaster");

                entity.Property(e => e.Id).HasDefaultValueSql("(newid())");

                entity.Property(e => e.DeptCode)
                    .IsRequired()
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.DeptDetails)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.InverseParent)
                    .HasForeignKey(d => d.ParentId)
                    .HasConstraintName("FK_HR_DepartmentMaster_HR_DepartmentMaster");
            });

            modelBuilder.Entity<HrDesignationMaster>(entity =>
            {
                entity.ToTable("HR_DesignationMaster");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.DesgCode)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("Desg_code");

                entity.Property(e => e.DesgDetails)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Desg_Details");

                entity.Property(e => e.DesgInTelugu)
                    .HasMaxLength(100)
                    .HasColumnName("Desg_In_Telugu");

                entity.Property(e => e.ExperienceReq)
                    .HasMaxLength(5)
                    .IsUnicode(false)
                    .HasColumnName("Experience_Req");

                entity.Property(e => e.QualificationReq)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Qualification_Req");
            });

            modelBuilder.Entity<HrEmployeeDocument>(entity =>
            {
                entity.ToTable("HR_EmployeeDocument");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.DocumentName)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.FilePath).IsUnicode(false);
            });

            modelBuilder.Entity<HrEmployeeInformationMaster>(entity =>
            {
                entity.ToTable("HR_EmployeeInformationMaster");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.AadharNo)
                    .HasMaxLength(14)
                    .IsUnicode(false);

                entity.Property(e => e.AltContactNo)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.BiometricId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BlodGroup)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.ConfirmationDate).HasColumnType("date");

                entity.Property(e => e.ContactNo)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.DeptCode)
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.DesgCode)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Division)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Dob).HasColumnType("date");

                entity.Property(e => e.Doj).HasColumnType("date");

                entity.Property(e => e.EmpImageUrl).IsUnicode(false);

                entity.Property(e => e.EmploymentUnder)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EsiNo)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FatherOrhusband)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("FatherORHusband");

                entity.Property(e => e.Gender)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.IhExperience)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ImageId)
                    .HasMaxLength(70)
                    .IsUnicode(false);

                entity.Property(e => e.InactiveDate).HasColumnType("date");

                entity.Property(e => e.InternalId)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.LeftDate).HasColumnType("date");

                entity.Property(e => e.MaritalStatus)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.NameInTelugu).HasMaxLength(100);

                entity.Property(e => e.PanCard)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.PassportNo)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PermanentAddress)
                    .HasMaxLength(2000)
                    .IsUnicode(false);

                entity.Property(e => e.PfNo)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PresentAddress)
                    .HasMaxLength(2000)
                    .IsUnicode(false);

                entity.Property(e => e.RejoinDate).HasColumnType("date");

                entity.Property(e => e.SkillIds)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TotalExperience).HasColumnType("decimal(4, 2)");

                entity.Property(e => e.Uanno)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("UANNo");
            });

            modelBuilder.Entity<HrEmployeeReference>(entity =>
            {
                entity.ToTable("HR_EmployeeReference");

                entity.Property(e => e.Id).HasDefaultValueSql("(newid())");

                entity.Property(e => e.RelationShip)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<HrFamilyDetail>(entity =>
            {
                entity.ToTable("HR_FamilyDetails");

                entity.Property(e => e.Id).HasDefaultValueSql("(newid())");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Ocupation)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RelationShip)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<HrPersonExperience>(entity =>
            {
                entity.ToTable("HR_PersonExperience");

                entity.Property(e => e.Id).HasDefaultValueSql("(newid())");

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Designation)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FromDate).HasColumnType("date");

                entity.Property(e => e.ReasonForLeaving)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ToDate).HasColumnType("date");
            });

            modelBuilder.Entity<HrPersonalParticular>(entity =>
            {
                entity.ToTable("HR_PersonalParticulars");

                entity.Property(e => e.Id).HasDefaultValueSql("(newid())");

                entity.Property(e => e.EductionalQualification)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HealthProblems)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.IdentityRemarks)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.ReligionCasteSubCaste)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
