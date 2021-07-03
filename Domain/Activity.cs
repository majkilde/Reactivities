using System;

namespace Domain
{
    public class Activity
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public DateTime Date { get; set; }

        public string Description { get; set; }

        public String Category { get; set; }

        public String City { get; set; }

        public String Venue { get; set; }
        
    }
}