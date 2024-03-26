const Productora = require('../models/productora');
const { request, response } = require('express');

const obtenerProductoras = async (req = request, res = response) => {
    try {
        const { estado } = req.query;
        const productoras = await Productora.find({ estado });
        return res.json(productoras);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const crearProductora = async (req, res) => {
    try {
        const { nombre, descripcion,slogan } = req.body;

        const productora = new Productora({ nombre, descripcion,slogan,});

        await productora.save();

        return res.status(201).json(productora);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const actualizarProductora = async (req, res) => {
    try {
        const { id } = req.params;
        const datosActualizados = req.body;

        datosActualizados.fechaActualizacion = new Date();

        const productoraActualizada = await Productora.findByIdAndUpdate(id, datosActualizados, { new: true });

        res.json(productoraActualizada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const borrarProductora = async (req, res) => {
    try {
        const { id } = req.params;
        await Productora.findByIdAndDelete(id);
        return res.status(204).json({ message: "Borrado" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    obtenerProductoras,
    crearProductora,
    actualizarProductora,
    borrarProductora
};