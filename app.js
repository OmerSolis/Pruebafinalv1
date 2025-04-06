const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// Leer usuarios desde db.json
const dbPath = path.join(__dirname, 'db.json');
let users = [];

try {
    const data = fs.readFileSync(dbPath, 'utf8');
    users = JSON.parse(data).users || [];
} catch (err) {
    console.error('Error reading db.json:', err);
}

// Endpoints
app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

// Iniciar servidor solo si es archivo principal
if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => console.log(`API is running on port ${PORT}`));
}

module.exports = app;
