 // Import required modules
const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// Initialize express app
const app = express();

app.use(cors());
app.use(express.json());



app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, hashedPassword]
    );
    res.status(201).json(newUser.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// User login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) return res.status(404).send('User not found');

    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) return res.status(401).send('Invalid credentials');

    const token = jwt.sign({ id: user.rows[0].id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token, user: user.rows[0] });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Fetch messages
app.get('/messages', async (req, res) => {
  try {
    const messages = await pool.query('SELECT * FROM messages ORDER BY created_at DESC');
    res.json(messages.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Send message
app.post('/messages', async (req, res) => {
  const { sender_id, content } = req.body;
  try {
    const newMessage = await pool.query(
      'INSERT INTO messages (sender_id, content) VALUES ($1, $2) RETURNING *',
      [sender_id, content]
    );
    res.status(201).json(newMessage.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


