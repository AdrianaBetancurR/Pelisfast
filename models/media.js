const { Schema, model } = require('mongoose');

const MediaSchema = Schema({
    serial: {
        type: String,
        unique: true,
        required: [true, 'El serial es requerido']
    },
    titulo: {
        type: String,
        required: [true, 'El título es requerido']
    },
    sinopsis: {
        type: String,
        required: [true, 'La sinopsis es requerida']
    },
    url: {
        type: String,
        unique: true,
        required: [true, 'La URL de la película es requerida']
    },
    image: {
        type: String,
        unique: true,
        required: [true, 'La imagen o foto de portada es requerida']
    },

    fechaCreacion: {
        type: Date,
        default: Date.now,
        required: true
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now,
        required: true
    },
    fechaEstreno: {
        type: Date,
        required: [true, 'El año de estreno es requerido']
    },
    genero: { 
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: [true, 'El género principal es requerido']
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: [true, 'El director principal es requerido']
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: [true, 'La productora es requerida']
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: [true, 'El tipo es requerido']
    }
});

module.exports = model('Media', MediaSchema);