const { Dentist, validate } = require("../models/dentistModel");
const base = require("./baseController");

exports.addOne = base.addOne(Dentist);
exports.getAll = base.getAllPopulate(Dentist, ["degree", "expert"]);
exports.getOne = base.getOnePopulate(Dentist, ["degree", "expert"]);
exports.deleteOne = base.deleteOne(Dentist);
exports.updateOne = base.updateOne(Dentist);
