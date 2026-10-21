# Task Manager API (Node.js + Express + MySQL)

Proyecto práctico que implementa una API RESTful para la gestión de tareas conectada a una base de datos MySQL.

## 🚀 Requisitos previos
* Node.js (v18+)
* Servidor MySQL

## 🔧 Instalación y Configuración

1. Clona el repositorio o descomprime el archivo ZIP.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Prepara la base de datos:
   * Importa el archivo `schema.sql` en tu servidor MySQL.
4. Configura variables de entorno:
   * Copia `.env.example` a un nuevo archivo `.env` y ajusta las credenciales:
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=tu_contraseña
   DB_NAME=task_db
   ```
5. Inicia el servidor:
   ```bash
   npm start
   ```

## 📌 Endpoints de la API

| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| `GET` | `/api/tasks` | Obtener todas las tareas |
| `POST` | `/api/tasks` | Crear una nueva tarea |
| `PATCH` | `/api/tasks/:id` | Actualizar estado (`completed`) de una tarea |
| `DELETE` | `/api/tasks/:id` | Eliminar una tarea |
