const express = require("express");
const router = express.Router();

const degreeController = require("../controllers/degreeController");
const { validate } = require("../models/degreeModel");
const validator = require("../middleware/validate");
const auth = require("../middleware/auth");

router.get("/", degreeController.getAll);
router.get("/:id", degreeController.getOne);

router.use(auth.protect);
router.use(auth.restrictTo("admin"));

router.post("/", validator(validate), degreeController.addOne);
router.post("/:id", degreeController.updateOne);
router.delete("/:id", degreeController.deleteOne);

module.exports = router;
