const { Schema, model } = require('mongoose');

const ProductoraSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de la productora es requerido'],
        unique: [true, 'La productora ya existe']
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
    slogan: {
        type: String,
        required: [true, 'El slogan de la productora es requerido']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción de la productora es requerida']
    }
});

module.exports = model('Productora', ProductoraSchema);