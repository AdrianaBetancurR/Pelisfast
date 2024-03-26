const mongoose = require('mongoose');

const mongoConnection = async () => {
    try {
        await mongoose.connect ("mongodb://localhost:27017/pelisfast");
        console.log('Conexión exitosa a la base de datos!');
    } catch (error) {
        console.error('Error de conexión a la base de datos:', error.message);
        throw new Error('Error de conexión a la base de datos');
    }
};

module.exports = mongoConnection;