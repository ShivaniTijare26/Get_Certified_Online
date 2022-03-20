USE [master]
GO
/****** Object:  Database [GetCertifiedOnline_Db]    Script Date: 14-03-2022 18:18:19 ******/
CREATE DATABASE [GetCertifiedOnline_Db]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'GetCertifiedOnline_Db', FILENAME = N'C:\Users\a\GetCertifiedOnline_Db.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'GetCertifiedOnline_Db_log', FILENAME = N'C:\Users\a\GetCertifiedOnline_Db_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [GetCertifiedOnline_Db].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET ARITHABORT OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET  ENABLE_BROKER 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET  MULTI_USER 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET DB_CHAINING OFF 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET QUERY_STORE = OFF
GO
USE [GetCertifiedOnline_Db]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [GetCertifiedOnline_Db]
GO
/****** Object:  Table [dbo].[Course]    Script Date: 14-03-2022 18:18:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Course](
	[CourseId] [int] IDENTITY(1,1) NOT NULL,
	[CourseName] [varchar](50) NOT NULL,
	[Description] [varchar](30) NULL,
	[Duration] [varchar](20) NOT NULL,
	[Price] [numeric](18, 0) NULL,
	[CourseType] [varchar](30) NULL,
	[Status] [varchar](20) NULL,
	[CreatedON] [varchar](12) NULL,
	[ModifiedOn] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[CourseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CourseDetails]    Script Date: 14-03-2022 18:18:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CourseDetails](
	[DetailsId] [int] IDENTITY(1,1) NOT NULL,
	[CourseId] [int] NULL,
	[VideoLink] [nvarchar](20) NULL,
	[UploadedDate] [date] NOT NULL,
	[ModifiedDate] [date] NULL,
	[Status] [varchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[DetailsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CoursePayment]    Script Date: 14-03-2022 18:18:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CoursePayment](
	[PaymentId] [int] IDENTITY(1,1) NOT NULL,
	[CourseId] [int] NULL,
	[RegID] [int] NULL,
	[Amount] [numeric](18, 0) NULL,
	[ModeOfPayment] [varchar](30) NULL,
	[Paiddate] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[PaymentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CourseRegistration]    Script Date: 14-03-2022 18:18:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CourseRegistration](
	[CourseRegId] [int] IDENTITY(1,1) NOT NULL,
	[CourseId] [int] NULL,
	[RegId] [int] NULL,
	[Status] [varchar](30) NULL,
	[FromDate] [varchar](12) NULL,
	[ToDate] [varchar](12) NULL,
	[CourseRegistrationDate] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[CourseRegId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ExamList]    Script Date: 14-03-2022 18:18:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExamList](
	[ExamId] [int] IDENTITY(1,1) NOT NULL,
	[ExamDate] [varchar](12) NULL,
	[CourseName] [varchar](50) NULL,
	[Duration] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[ExamId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[feedback]    Script Date: 14-03-2022 18:18:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[feedback](
	[FeedbackId] [int] IDENTITY(1,1) NOT NULL,
	[RegId] [int] NOT NULL,
	[FeedBack] [varchar](200) NULL,
	[Ratings] [int] NOT NULL,
	[CourseId] [int] NULL,
	[Feedbackdate] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[FeedbackId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users_Registration]    Script Date: 14-03-2022 18:18:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users_Registration](
	[RegId] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](30) NOT NULL,
	[LastName] [varchar](30) NOT NULL,
	[EmailId] [varchar](30) NOT NULL,
	[Password] [varchar](15) NOT NULL,
	[ContactNo] [numeric](10, 0) NOT NULL,
	[DOB] [varchar](12) NULL,
	[UserRole] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[RegId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CourseDetails]  WITH CHECK ADD FOREIGN KEY([CourseId])
REFERENCES [dbo].[Course] ([CourseId])
GO
ALTER TABLE [dbo].[CoursePayment]  WITH CHECK ADD FOREIGN KEY([CourseId])
REFERENCES [dbo].[Course] ([CourseId])
GO
ALTER TABLE [dbo].[CoursePayment]  WITH CHECK ADD FOREIGN KEY([RegID])
REFERENCES [dbo].[Users_Registration] ([RegId])
GO
ALTER TABLE [dbo].[CourseRegistration]  WITH CHECK ADD FOREIGN KEY([CourseId])
REFERENCES [dbo].[Course] ([CourseId])
GO
ALTER TABLE [dbo].[CourseRegistration]  WITH CHECK ADD FOREIGN KEY([RegId])
REFERENCES [dbo].[Users_Registration] ([RegId])
GO
ALTER TABLE [dbo].[feedback]  WITH CHECK ADD FOREIGN KEY([CourseId])
REFERENCES [dbo].[Course] ([CourseId])
GO
ALTER TABLE [dbo].[feedback]  WITH CHECK ADD FOREIGN KEY([RegId])
REFERENCES [dbo].[Users_Registration] ([RegId])
GO
ALTER TABLE [dbo].[Course]  WITH CHECK ADD CHECK  (([Status]='Not Active' OR [Status]='Active'))
GO
ALTER TABLE [dbo].[CourseDetails]  WITH CHECK ADD CHECK  (([Status]='Not Active' OR [Status]='Active'))
GO
ALTER TABLE [dbo].[CourseRegistration]  WITH CHECK ADD CHECK  (([Status]='Not Active' OR [Status]='Active'))
GO
ALTER TABLE [dbo].[feedback]  WITH CHECK ADD CHECK  (([Ratings]<=(5)))
GO
USE [master]
GO
ALTER DATABASE [GetCertifiedOnline_Db] SET  READ_WRITE 
GO
