using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TrainingApi.Models
{
    public class FoodItem
    {
        [Key]
        [Column(name:"FoodItemId")]
        public int FooidItemId { get; set; }

        [Column(TypeName="nvarchar(100)")]
        public string FoodItemName { get; set; }

        public decimal Price { get; set; }
    }
}
