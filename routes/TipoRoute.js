const { obtenerTipos,
     crearTipo, 
     actualizarTipo, 
     borrarTipo } = 
     require('../controllers/TipoController');
     
const { Router } = require('express');
const router = Router();

// Consultar los tipos
router.get('/', obtenerTipos);

// Crear un tipo
router.post('/', crearTipo);

// Actualizar un tipo por ID
router.put('/:id', actualizarTipo);

// Borrar un tipo por ID
router.delete('/:id', borrarTipo);

module.exports = router;