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
        public virtual DbSet<HrEmployeeInformationMaster> HrEmployeeInformationMasters { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=JAGADEESH;Initial Catalog=CV_ERP_Aqua;User Id=sa;Password=admin123;");
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

            modelBuilder.Entity<HrEmployeeInformationMaster>(entity =>
            {
                entity.ToTable("HR_EmployeeInformationMaster");

                entity.Property(e => e.Id).HasDefaultValueSql("(newid())");

                entity.Property(e => e.AadharNo)
                    .HasMaxLength(14)
                    .IsUnicode(false);

                entity.Property(e => e.AltContactNo)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.BasicSalary).HasColumnType("decimal(10, 2)");

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

                entity.Property(e => e.Conveyance).HasColumnType("decimal(10, 2)");

                entity.Property(e => e.Da)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("DA");

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

                entity.Property(e => e.Doc).HasColumnType("date");

                entity.Property(e => e.Doj).HasColumnType("date");

                entity.Property(e => e.EmploymentUnder)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EsiNo)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Extension)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.FatherHusband)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.Hra)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("HRA");

                entity.Property(e => e.IhExperience)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ImageId)
                    .HasMaxLength(70)
                    .IsUnicode(false);

                entity.Property(e => e.InactiveDate).HasColumnType("date");

                entity.Property(e => e.Incentive).HasColumnType("decimal(10, 2)");

                entity.Property(e => e.InternalId)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.LeftDate).HasColumnType("date");

                entity.Property(e => e.MaritalStatus)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.MedicalAllowance).HasColumnType("decimal(10, 2)");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.NameInTelugu).HasMaxLength(100);

                entity.Property(e => e.Onroll).HasDefaultValueSql("((0))");

                entity.Property(e => e.OtherAllowances).HasColumnType("decimal(10, 2)");

                entity.Property(e => e.Pancard)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.PassPortNo)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PermanentAddress)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.PersonId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PfNo)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PresentAddress)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.RejoinDate).HasColumnType("date");

                entity.Property(e => e.SkillIds)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SubDeptId)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.TotalExperience).HasColumnType("decimal(4, 2)");

                entity.Property(e => e.TotalSalary).HasColumnType("decimal(10, 2)");

                entity.Property(e => e.TwelveHrs).HasColumnName("Twelve_Hrs");

                entity.Property(e => e.UanNo)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
