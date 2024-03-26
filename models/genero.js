

const { Schema, model } = require('mongoose');

const GeneroSchema = Schema({
    nombre: {
        type: String,
        unique: [true, 'El nombre debe ser único'],
        required: [true, 'El nombre es requerido'],
        minLength: [1, 'El nombre debe tener al menos 1 carácter']
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now
    },
    descripcion: {
        type: String
    }
});

module.exports = model('Genero', GeneroSchema);