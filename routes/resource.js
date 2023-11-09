var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ant_controller = require('../controllers/ant');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// ant ROUTES ///
// POST request for creating a ant.
router.post('/ant', ant_controller.ant_create_post);
// DELETE request to delete ant.
router.delete('/ant/:id', ant_controller.ant_delete);
// PUT request to update ant.
router.put('/ant/:id', ant_controller.ant_update_put);
// GET request for one ant.
router.get('/ant/:id', ant_controller.ant_detail);
// GET request for list of all ant items.
router.get('/ant', ant_controller.list);
module.exports = router;