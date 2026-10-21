const db = require('../config/db');

// Obtener todas las tareas
exports.getTasks = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una tarea
exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'El título es obligatorio' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO tasks (title, description) VALUES (?, ?)',
      [title, description]
    );
    res.status(201).json({ id: result.insertId, title, description, completed: false });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar estado de la tarea
exports.updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE tasks SET completed = ? WHERE id = ?',
      [completed, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    res.json({ message: 'Estado de la tarea actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar tarea
exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query('DELETE FROM tasks WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    res.json({ message: 'Tarea eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
