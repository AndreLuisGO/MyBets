using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyBetsAPI.Models
{
  [EnableCors("AnotherPolicy")]
  public partial class Auction
  {
    [Key]
    public int Id { get; set; }
    [StringLength(20, MinimumLength = 2, ErrorMessage = "Nome do leilão deve ter no mínimo 2 caracteres")]
    public string AuctionName { get; set; }
    [Required]
    public decimal InitialBet { get; set; }
    [Required]
    public int UsedItem { get; set; }
    [Required(ErrorMessage = "Favor informar o nome do Leiloeiro.")]
    public string Auctioneer { get; set; }
    [Required]
    public System.DateTime StartDate { get; set; }
    [Required]
    public System.DateTime EndDate { get; set; }

  }
}
