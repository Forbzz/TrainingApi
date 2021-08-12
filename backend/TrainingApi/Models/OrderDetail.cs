using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TrainingApi.Models
{
    public class OrderDetail
    {
        [Key]
        public int OrderDetailId { get; set; }

        public long OrderMasterId { get; set; }

        public int FoodItemId { get; set; }
        public decimal FoodItemPrice { get; set; }

        public int Quantity { get; set; }

        public FoodItem FoodItem { get; set; }
    }
}
