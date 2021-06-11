const express = require("express");
const router = express.Router();
const validator = require("../middleware/validate");
const { validate } = require("../models/appointmentModel");
const auth = require("../middleware/auth");
const { scheduleEmail } = require("../middleware/mailService");
const controller = require("../controllers/appointmentController");

router.post("/", validator(validate), scheduleEmail, controller.addOne);
router.get("/by_user/:id", controller.getByUserId);
router.use(auth.protect);
router.get("/by_email", controller.getOneByEmail);
router.get("/:id", controller.getOne);
router.use(auth.restrictTo("admin"));
router.get("/", controller.getAll);

module.exports = router;
