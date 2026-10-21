CREATE DATABASE IF NOT EXISTS task_db;
USE task_db;

CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Datos de prueba
INSERT INTO tasks (title, description) VALUES
('Configurar repositorio', 'Subir el proyecto a GitHub con su respectivo README'),
('Aprender Node.js', 'Practicar endpoints con Express y MySQL');
