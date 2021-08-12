﻿using Castle.MicroKernel.SubSystems.Conversion;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TrainingApi.Models
{
    public class OrderMaster
    {
        [Key]
        public long OrderMasterId { get; set; }

        [Column(TypeName ="nvarchar(75)")]
        public string OrderNumber { get; set; }

        public int CustomerId { get; set; }
        [Column(TypeName = "nvarchar(75)")]

        public string PMethod { get; set; }

        public decimal GTotal { get; set; }

        public Customer Customer { get; set; }

        public List<OrderDetail> OrderDetails { get; set; }
    }
}
