package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/kittituchdev/budget-manager/internal/database"
	"github.com/kittituchdev/budget-manager/pkg"
)

func main() {
	app := fiber.New()
	pkg.SetupRoutes(app)

	if err := database.ConnectDB(); err != nil {
		log.Fatalf("Cannot connect to database: %v", err)
	}

	app.Listen(":3000")
}
