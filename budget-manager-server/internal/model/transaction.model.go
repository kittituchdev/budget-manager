package model

type Transaction struct {
	TransactionID int `gorm:"primaryKey;autoIncrement;column:transaction_id" json:"transaction_id"`

	TransactionDate string  `gorm:"type:text;not null" json:"transaction_date"` // e.g. "2025/01/02"
	Type            string  `gorm:"type:text;not null" json:"type"`             // "income" or "expense"
	Value           float64 `gorm:"type:numeric(12,2);not null" json:"value"`
	Description     string  `gorm:"type:text" json:"description"`

	CategoryID int `gorm:"column:category_id;not null" json:"category_id"`

	CreatedAt int64  `gorm:"column:created_at;not null" json:"created_at"`
	UpdatedAt int64  `gorm:"column:updated_at;not null" json:"updated_at"`
	CreatedBy string `gorm:"type:text;not null"         json:"created_by"`
	UpdatedBy string `gorm:"type:text;not null"         json:"updated_by"`
}
