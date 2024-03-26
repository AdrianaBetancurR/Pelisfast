const express = require('express');
const app = require('./app');
const mongoConnection = require('./databases/config');

// Conectarse a la base de datos
mongoConnection();

// Configurar el puerto
const port = process.env.PORT || 3000;
app.set('port', port);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor arrancó por puerto ${port}`);
});