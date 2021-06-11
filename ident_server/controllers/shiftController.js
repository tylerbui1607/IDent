const { Shift } = require("../models/shiftModel");
const base = require("./baseController");

exports.addOne = base.addOne(Shift);
exports.getOne = base.getOne(Shift);
exports.getAll = base.getAll(Shift);
exports.deleteOne = base.deleteOne(Shift);
exports.updateOne = base.updateOne(Shift);
