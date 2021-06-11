const { Degree } = require('../models/degreeModel');
const base = require('./baseController');

exports.addOne = base.addOne(Degree);
exports.getAll = base.getAll(Degree);
exports.getOne = base.getOne(Degree);
exports.updateOne = base.updateOne(Degree);
exports.deleteOne = base.deleteOne(Degree);