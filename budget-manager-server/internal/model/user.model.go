package model

import (
	"github.com/google/uuid"
)

type User struct {
	UserID uuid.UUID `grom:"type:uuid;primaryKey" json:"user_id"`

	Email    string  `gorm:"type:text;unique;not null" json:"email"`
	Password string  `gorm:"type:text;not null"         json:"password"`
	Ref      *string `gorm:"type:text"                  json:"ref"` // can be null
	Name     string  `gorm:"type:text;not null"         json:"name"`

	CreatedAt int64  `gorm:"column:created_at;not null" json:"created_at"`
	UpdatedAt int64  `gorm:"column:updated_at;not null" json:"updated_at"`
	CreatedBy string `gorm:"type:text;not null"         json:"created_by"`
	UpdatedBy string `gorm:"type:text;not null"         json:"updated_by"`
}
