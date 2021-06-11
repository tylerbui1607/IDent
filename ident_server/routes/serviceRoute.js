const express = require("express");
const router = express.Router();

const serviceController = require("../controllers/serviceController");
const { validate } = require("../models/serviceModel");
const validator = require("../middleware/validate");
const auth = require("../middleware/auth");

router.get("/", serviceController.getAll);
router.get("/:id", serviceController.getOne);

router.use(auth.protect);
router.use(auth.restrictTo("admin"));

router.post("/", validator(validate), serviceController.addOne);
router.post("/:id", serviceController.updateOne);
router.delete("/:id", serviceController.deleteOne);

module.exports = router;
