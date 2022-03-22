using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Get_Certified_Online_api.Entities
{
    public partial class GetCertifiedOnline_DbContext : DbContext
    {
        public GetCertifiedOnline_DbContext()
        {
        }

        public GetCertifiedOnline_DbContext(DbContextOptions<GetCertifiedOnline_DbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Course> Courses { get; set; }
        public virtual DbSet<CourseDetail> CourseDetails { get; set; }
        public virtual DbSet<CoursePayment> CoursePayments { get; set; }
        public virtual DbSet<CourseRegistration> CourseRegistrations { get; set; }
        public virtual DbSet<ExamList> ExamLists { get; set; }
        public virtual DbSet<Feedback> Feedbacks { get; set; }
        public virtual DbSet<UsersRegistration> UsersRegistrations { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=tcp:gcodbserver.database.windows.net,1433;Initial Catalog=Gco_Db;Persist Security Info=False;User ID=shivani;Password=Pa55word;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Course>(entity =>
            {
                entity.ToTable("Course");

                entity.Property(e => e.CourseName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CourseType)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn)
                    .HasMaxLength(12)
                    .IsUnicode(false)
                    .HasColumnName("CreatedON");

                entity.Property(e => e.Description)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Duration)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("date");

                entity.Property(e => e.Price).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.Status)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CourseDetail>(entity =>
            {
                entity.HasKey(e => e.DetailsId)
                    .HasName("PK__CourseDe__BAC8628CD17D9ADA");

                entity.Property(e => e.ModifiedDate).HasColumnType("date");

                entity.Property(e => e.Status)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.UploadedDate).HasColumnType("date");

                entity.Property(e => e.VideoLink).HasMaxLength(20);

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.CourseDetails)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("FK__CourseDet__Cours__18EBB532");
            });

            modelBuilder.Entity<CoursePayment>(entity =>
            {
                entity.HasKey(e => e.PaymentId)
                    .HasName("PK__CoursePa__9B556A38ED96E8D2");

                entity.ToTable("CoursePayment");

                entity.Property(e => e.Amount).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModeOfPayment)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Paiddate).HasColumnType("datetime");

                entity.Property(e => e.RegId).HasColumnName("RegID");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.CoursePayments)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("FK__CoursePay__Cours__3F115E1A");

                entity.HasOne(d => d.Reg)
                    .WithMany(p => p.CoursePayments)
                    .HasForeignKey(d => d.RegId)
                    .HasConstraintName("FK__CoursePay__RegID__40058253");
            });

            modelBuilder.Entity<CourseRegistration>(entity =>
            {
                entity.HasKey(e => e.CourseRegId)
                    .HasName("PK__CourseRe__63587D41536064EF");

                entity.ToTable("CourseRegistration");

                entity.Property(e => e.CourseRegistrationDate).HasColumnType("date");

                entity.Property(e => e.FromDate)
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ToDate)
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.CourseRegistrations)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("FK__CourseReg__Cours__42E1EEFE");

                entity.HasOne(d => d.Reg)
                    .WithMany(p => p.CourseRegistrations)
                    .HasForeignKey(d => d.RegId)
                    .HasConstraintName("FK__CourseReg__RegId__43D61337");
            });

            modelBuilder.Entity<ExamList>(entity =>
            {
                entity.HasKey(e => e.ExamId)
                    .HasName("PK__ExamList__297521C7198AFFDB");

                entity.ToTable("ExamList");

                entity.Property(e => e.CourseName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Duration)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ExamDate)
                    .HasMaxLength(12)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Feedback>(entity =>
            {
                entity.ToTable("feedback");

                entity.Property(e => e.FeedBack1)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("FeedBack");

                entity.Property(e => e.Feedbackdate).HasColumnType("date");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Feedbacks)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("FK__feedback__Course__498EEC8D");

                entity.HasOne(d => d.Reg)
                    .WithMany(p => p.Feedbacks)
                    .HasForeignKey(d => d.RegId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__feedback__RegId__47A6A41B");
            });

            modelBuilder.Entity<UsersRegistration>(entity =>
            {
                entity.HasKey(e => e.RegId)
                    .HasName("PK__Users_Re__2C6822F8D2008F8D");

                entity.ToTable("Users_Registration");

                entity.Property(e => e.ContactNo).HasColumnType("numeric(10, 0)");

                entity.Property(e => e.Dob)
                    .HasMaxLength(12)
                    .IsUnicode(false)
                    .HasColumnName("DOB");

                entity.Property(e => e.EmailId)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.UserRole)
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
