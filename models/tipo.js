const { Schema, model } = require('mongoose');

const TipoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del tipo es requerido'],
        unique: [true, 'El tipo ya existe']
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

module.exports = model('Tipo', TipoSchema);