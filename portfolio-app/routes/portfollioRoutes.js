const express= require('express');
const { sentEmailController } = require('../controllers/portfollioControllers');


//router objects

const router = express.Router();
//routes
router.post('/sendEmail',sentEmailController)

//export
module.exports = router;