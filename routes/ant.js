var express = require('express');
const ant_controllers= require('../controllers/ant');
var router = express.Router();
/* GET costumes */
router.get('/', ant_controllers.ant_view_all_Page );
module.exports = router;
