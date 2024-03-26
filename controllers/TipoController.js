const Tipo = require('../models/tipo');
const { request, response } = require('express');

const obtenerTipos = async (req = request, res = response) => {
    try {
        const { nombre } = req.query;
        const tipos = await Tipo.find({ nombre: nombre });
        return res.json(tipos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    obtenerTipos
};

const crearTipo = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;

        const tipo = new Tipo({ nombre, descripcion });

        await tipo.save();

        return res.status(201).json(tipo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const actualizarTipo = async (req, res) => {
    try {
        const { id } = req.params;
        const datosActualizados = req.body;

        datosActualizados.fechaActualizacion = new Date();

        const tipoActualizado = await Tipo.findByIdAndUpdate(id, datosActualizados, { new: true });

        res.json(tipoActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const borrarTipo = async (req, res) => {
    try {
        const { id } = req.params;
        await Tipo.findByIdAndDelete(id);
        return res.status(204).json({ message: "Borrado" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    obtenerTipos,
    crearTipo,
    actualizarTipo,
    borrarTipo
};