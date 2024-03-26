const {
    obtenerProductoras,
    crearProductora,
    actualizarProductora,
    borrarProductora
} = require('../controllers/ProductoraController');

const { Router } = require('express');
const router = Router();

// Consultar las productoras
router.get('/', obtenerProductoras);

// Crear una productora
router.post('/', crearProductora);

// Actualizar una productora por ID
router.put('/:id', actualizarProductora);

// Borrar una productora por ID
router.delete('/:id', borrarProductora);

module.exports = router;