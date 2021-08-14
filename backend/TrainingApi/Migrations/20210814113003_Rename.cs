using Microsoft.EntityFrameworkCore.Migrations;

namespace TrainingApi.Migrations
{
    public partial class Rename : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FooidItemId",
                table: "FoodItems",
                newName: "FoodItemId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FoodItemId",
                table: "FoodItems",
                newName: "FooidItemId");
        }
    }
}
