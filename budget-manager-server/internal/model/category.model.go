package model

type Category struct {
	CategoryID int `gorm:"primaryKey;autoIncrement;column:category_id" json:"category_id"`

	Name string  `gorm:"type:text;not null" json:"name"`
	Type string  `gorm:"type:text;not null" json:"type"` // "income" or "expense"
	Icon *string `gorm:"type:text"         json:"icon"`  // can be null

	CreatedAt int64  `gorm:"column:created_at;not null" json:"created_at"`
	UpdatedAt int64  `gorm:"column:updated_at;not null" json:"updated_at"`
	CreatedBy string `gorm:"type:text;not null"         json:"created_by"`
	UpdatedBy string `gorm:"type:text;not null"         json:"updated_by"`
}
