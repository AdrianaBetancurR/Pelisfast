const Director = require('../models/director');
const { request, response } = require('express');

const obtenerDirectores = async (req = request, res = response) => {
    try {
        const { estado } = req.query;
        const directores = await Director.find({ estado });
        return res.json(directores);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const crearDirector = async (req, res) => {
    try {
        const { nombre } = req.body;

        const director = new Director({ nombre });

        await director.save();

        return res.status(201).json(director);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const actualizarDirector = async (req, res) => {
    try {
        const { id } = req.params;
        const datosActualizados = req.body;

        datosActualizados.fechaActualizacion = new Date();

        const directorActualizado = await Director.findByIdAndUpdate(id, datosActualizados, { new: true });

        res.json(directorActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const borrarDirector = async (req, res) => {
    try {
        const { id } = req.params;
        await Director.findByIdAndDelete(id);
        return res.status(204).json({ message: "Borrado" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    obtenerDirectores,
    crearDirector,
    actualizarDirector,
    borrarDirector
};