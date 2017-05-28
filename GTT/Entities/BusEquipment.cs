namespace GTT.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("BusEquipment")]
    public partial class BusEquipment
    {
        public int ID { get; set; }

        public int? BusID { get; set; }

        public int? EquipmentID { get; set; }

        public virtual Bus Bus { get; set; }

        public virtual Equipment Equipment { get; set; }
    }
}
