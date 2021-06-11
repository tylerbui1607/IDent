const { Service } = require("../models/serviceModel");
const base = require("./baseController");

exports.addOne = base.addOne(Service);
exports.getAll = base.getAll(Service);
exports.getOne = base.getOne(Service);
exports.updateOne = base.updateOne(Service);
exports.deleteOne = base.deleteOne(Service);
