using Microsoft.AspNetCore.Cors;
using System.ComponentModel.DataAnnotations;

namespace MyBetsAPI.Models
{
  [EnableCors("AnotherPolicy")]
  public partial class User
  {
    [Key]
    public string username { get; set; }
    [Required(ErrorMessage = "Nome do Leiloeiro deve ter no mínimo 4 caracteres.")]
    public string password { get; set; }
    [Required]
    public bool active { get; set; }

  }
}
