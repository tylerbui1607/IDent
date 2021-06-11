const router = require("express").Router();
const { validate } = require("../models/shiftModel");
const controller = require("../controllers/shiftController");
const auth = require("../middleware/auth");
const validator = require("../middleware/validate");

router.use(auth.protect);
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.use(auth.restrictTo("admin"));
router.post("/", validator(validate), controller.addOne);
router.delete("/:id", controller.deleteOne);
router.post("/:id", controller.updateOne);

module.exports = router;
