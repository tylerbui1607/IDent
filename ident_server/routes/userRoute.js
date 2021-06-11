const express = require('express');
const router = express.Router();
const { User } = require("../models/userModel");
const { sendEmail } = require("../middleware/mailService");
const { validate } = require('../models/userModel');
const validator = require('../middleware/validate');
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');

router.post('/login', userController.login);

router.post('/signup', validator(validate), userController.signup);

router.put('/forgot-password', userController.forgorPassword);

router.put('/reset-password', userController.resetPassword);

router.use(auth.protect);

router.get('/:id', userController.getOne);

router.post('/:id',  validator(validate), userController.update);

router.use(auth.restrictTo('admin'));

router.get('/', userController.getAll);

router.delete('/:id', userController.delete);


module.exports = router;