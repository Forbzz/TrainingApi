using Microsoft.EntityFrameworkCore.Migrations;

namespace TrainingApi.Migrations
{
    public partial class adduser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CustomerName",
                table: "AspNetUsers");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CustomerName",
                table: "AspNetUsers",
                type: "nvarchar(100)",
                nullable: true);
        }
    }
}
