const {
    obtenerDirectores,
    crearDirector,
    actualizarDirector,
    borrarDirector
} = require('../controllers/DirectorController');

const { Router } = require('express');
const router = Router();

// Consultar los directores
router.get('/', obtenerDirectores);

// Crear un director
router.post('/', crearDirector);

// Actualizar un director por ID
router.put('/:id', actualizarDirector);

// Borrar un director por ID
router.delete('/:id', borrarDirector);

module.exports = router;