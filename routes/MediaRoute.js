const { obtenerMedias,
     crearMedia, 
     actualizarMedia, 
     borrarMedia }
      = require('../controllers/MediaController');
const { Router } = require('express');
const router = Router();

// Consultar medias
router.get('/', obtenerMedias);

// Crear una media
router.post('/', crearMedia);

// Actualizar una media por ID
router.put('/:id', actualizarMedia);

// Borrar una media por ID
router.delete('/:id', borrarMedia);

module.exports = router;