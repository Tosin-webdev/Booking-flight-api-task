const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/api/flights', controller.findAll);
router.get('/api/flight/:id', controller.get);
router.post('/api/flight', controller.create);
router.put('/api/flight/:id', controller.update);
router.delete('/api/flight/:id', controller.delete);
module.exports = router;
