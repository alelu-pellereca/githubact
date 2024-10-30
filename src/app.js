const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

// Ruta básica
app.get('/microservicio_1', async (req, res) => {
    const response = await fetch('http://frontend:3001')
    const responseAux = await response.json()
    res.status(200).json({ message: responseAux.message });
});
app.get('/microservicio_2', async (req, res) => {
    const response = await fetch('http://backend:8081')
    const responseAux = await response.json()
    res.status(200).json({ message: responseAux.message });
});

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World from microservicioEntrada!' });
});

// Ruta de ejemplo para pruebas
app.post('/echo', (req, res) => {
    const { body } = req;
    res.status(200).json(body);
});

module.exports = app;