const Genero = require('../models/genero')
const { request, response } = require('express')

const obtenerGeneros = async (req = request, res = response) => {
    try {
        const { estado } = req.query;
        const generos = await Genero.find({ estado });
        return res.json(generos);
    } catch (e) {
        return res.status(500).json({ message: e });
    }
};

const crearGenero = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body; // Obtén los datos del cuerpo de la solicitud

        const genero = new Genero({ nombre, descripcion }); // Crea una instancia del modelo Genero con los datos proporcionados

        await genero.save(); // Guarda el nuevo género en la base de datos

        return res.status(201).json({ // Responde con el género creado y otros detalles
            id: genero._id,
            nombre: genero.nombre,
            descripcion: genero.descripcion,
            estado: genero.estado,
            fechaCreacion: genero.fechaCreacion
        });
    } catch (error) {
        return res.status(500).json({ message: error.message }); // Maneja los errores
    }
};

module.exports = {
    crearGenero
};

const actualizarGenero = async (req, res) => {
    try {
        const { id } = req.params;
        const datosActualizados = req.body;

        // Añadir la fecha de actualización
        datosActualizados.fechaActualizacion = new Date();

        // Actualizar el género en la base de datos
        const generoActualizado = await Genero.findByIdAndUpdate(id, datosActualizados, { new: true });

        res.json(generoActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    actualizarGenero
};

const borrarGenero = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        await Genero.findByIdAndDelete(id);
        return res.status(204).json({ message: "Borrado" });
    } catch (e) {
        return res.status(500).json({ message: e });
    }
};

module.exports = {
    obtenerGeneros,
    crearGenero,
    actualizarGenero,
    borrarGenero,
};