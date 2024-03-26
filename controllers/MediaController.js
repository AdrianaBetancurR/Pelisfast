const Media = require('../models/media');
const { request, response } = require('express');

const obtenerMedias = async (req = request, res = response) => {
    try {
        const medias = await Media.find();
        return res.json(medias);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const crearMedia = async (req, res) => {
    try {
        const { serial, titulo, sinopsis, url, image, fechaEstreno, genero, director, productora, tipo } = req.body;

        const media = new Media({ serial, titulo, sinopsis, url, image, fechaEstreno, genero, director, productora, tipo });

        await media.save();

        return res.status(201).json(media);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const actualizarMedia = async (req, res) => {
    try {
        const { id } = req.params;
        const datosActualizados = req.body;

        datosActualizados.fechaActualizacion = new Date();

        const mediaActualizada = await Media.findByIdAndUpdate(id, datosActualizados, { new: true });

        res.json(mediaActualizada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const borrarMedia = async (req, res) => {
    try {
        const { id } = req.params;
        await Media.findByIdAndDelete(id);
        return res.status(204).json({ message: "Borrado" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    obtenerMedias,
    crearMedia,
    actualizarMedia,
    borrarMedia
};