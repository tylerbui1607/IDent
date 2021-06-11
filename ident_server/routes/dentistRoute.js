const express = require("express");
const router = express.Router();

const dentistController = require("../controllers/dentistController");
const auth = require("../middleware/auth");
const validator = require("../middleware/validate");
const { validate } = require("../models/dentistModel");

router.get("/:id", dentistController.getOne);
router.get("/", dentistController.getAll);

router.use(auth.protect);
router.use(auth.restrictTo("admin"));

router.post("/", validator(validate), dentistController.addOne);
router.post("/:id", dentistController.updateOne);
router.delete("/:id", dentistController.deleteOne);

module.exports = router;
