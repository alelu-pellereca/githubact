const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

// Ruta básica
// Frontend
app.get('/frontend', (req, res) => {
    res.json({ image: 'alepellereca/imagenfront:2', description: 'Frontend' });
});
// Backend
app.get('/backend', (req, res) => {
    res.json({ image: 'alepellereca/imagenback:2', description: 'Backend' });
});
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});
app.post('/echo', (req, res) => {
    const { body } = req;
    res.status(200).json(body);
});

module.exports = app;