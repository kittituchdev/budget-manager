package database

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/kittituchdev/budget-manager/internal/model"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DB *gorm.DB

func ConnectDB() error {
	// Load .env file
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found, using system environment variables")
	}

	host := getEnv("DB_HOST")
	port := getEnv("DB_PORT")
	user := getEnv("DB_USER")
	password := getEnv("DB_PASSWORD")
	dbName := getEnv("DB_NAME")

	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s",
		host, user, password, dbName, port,
	)

	// Connect with GORM
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		DisableForeignKeyConstraintWhenMigrating: true,
		Logger:                                   logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		return fmt.Errorf("failed to open DB connection: %v", err)
	}

	DB = db

	Migrate()
	log.Println("Database connection established (GORM).")
	return nil
}

// Migrate runs GORM's AutoMigrate to create or update the schema.
func Migrate() error {
	// AutoMigrate all models
	if err := DB.AutoMigrate(
		&model.User{},
		&model.Category{},
		&model.Transaction{},
	); err != nil {
		return fmt.Errorf("auto migration failed: %v", err)
	}
	return nil
}

// Helper function to get environment variables with default values
func getEnv(key string) string {
	return os.Getenv(key)
}
