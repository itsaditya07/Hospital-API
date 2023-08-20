const express = require('express');
// const passport = require('../config/passport-local-strategy');
const router = express.Router();

const {registerDoctor}= require('../controllers/userControllers');

router.post('/doctors/register', registerDoctor);

// router.use('/employees', require('./employees'));
// router.use('/students', passport.checkAuthentication, require('./students'));
// router.use('/interviews', passport.checkAuthentication, require('./interviews'));

module.exports = router;