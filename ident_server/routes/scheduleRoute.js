const router = require("express").Router();
const auth = require("../middleware/auth");
const validator = require("../middleware/validate");
const { validate } = require("../models/scheduleModel");
const controller = require("../controllers/scheduleController");

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.use(auth.protect);
router.post("/", validator(validate), controller.addOne);
router.post("/:id", controller.updateOne);
router.delete("/:id", controller.deleteOne);

module.exports = router;
