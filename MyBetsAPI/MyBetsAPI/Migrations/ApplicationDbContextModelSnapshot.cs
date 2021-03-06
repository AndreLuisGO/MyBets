﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MyBetsAPI.Data;

namespace MyBetsAPI.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099");

            modelBuilder.Entity("MyBetsAPI.Models.Auction", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AuctionName")
                        .HasMaxLength(20);

                    b.Property<string>("Auctioneer")
                        .IsRequired();

                    b.Property<DateTime>("EndDate");

                    b.Property<decimal>("InitialBet");

                    b.Property<DateTime>("StartDate");

                    b.Property<int>("UsedItem");

                    b.HasKey("Id");

                    b.ToTable("Auctions");
                });

            modelBuilder.Entity("MyBetsAPI.Models.User", b =>
                {
                    b.Property<string>("username")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("active");

                    b.Property<string>("password")
                        .IsRequired();

                    b.HasKey("username");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
