namespace nude_solution.Models
{
    public class User
    {
        public long Id { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String Email { get; set; }
        public String Password { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
