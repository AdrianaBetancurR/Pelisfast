const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
app.use (express.urlencoded({extended: false}))


// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

const cors = require('cors')

app.get('', (req, res) => {
    return res.json({
        msj: 'Hola'
    });
});

// Rutas para los géneros
const generos = require('./routes/GeneroRoute')
app.use('/api/v1/generos', generos)

// Rutas para los directores
const directores = require('./routes/DirectorRoute');
app.use('/api/v2/directores', directores)

//Ruta para las productoras 
const productoras = require('./routes/ProductoraRoute');
app.use('/api/v3/productoras', productoras);

// Ruta para los tipos
const tipos = require('./routes/TipoRoute');
app.use('/api/v4/tipos', tipos);

// Ruta para las medias
const medias = require('./routes/MediaRoute');
app.use('/api/v5/medias', medias);

module.exports = app;  

