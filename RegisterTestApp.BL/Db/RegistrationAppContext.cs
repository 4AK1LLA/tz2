using Microsoft.EntityFrameworkCore;

namespace RegisterTestApp.Service.Db
{
    public class RegistrationAppContext:DbContext
    {
        public DbSet<RegistrationRequest> RegistrationRequests { get; set; }

        public string DbPath { get; }

        public RegistrationAppContext()
        {
            // C:\Users\{user}\AppData\Local
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var path = Environment.GetFolderPath(folder);
            DbPath = System.IO.Path.Join(path, "database.db");
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite($"Data Source={DbPath}");
    }
}
