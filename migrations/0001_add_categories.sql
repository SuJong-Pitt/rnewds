-- Migration: 0001_add_categories.sql
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE projects ADD COLUMN category_id INTEGER REFERENCES categories(id);
