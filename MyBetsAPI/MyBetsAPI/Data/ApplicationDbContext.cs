using Microsoft.EntityFrameworkCore;
using MyBetsAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyBetsAPI.Data
{
  public class ApplicationDbContext : DbContext
  {
    public ApplicationDbContext()
    {
      
    }
        
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        optionsBuilder.UseSqlite("DataSource=app.db");
      }
    }

    public virtual DbSet<Auction> Auctions { get; set; }
    public virtual DbSet<User> Users { get; set; }
  }
}
