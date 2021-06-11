const base = require("./baseController");
const c = require("../constants");
const { Schedule } = require("../models/scheduleModel");
const { Dentist } = require("../models/dentistModel");
const { Degree } = require("../models/degreeModel");
exports.addOne = base.addOne(Schedule);
exports.getOne = async (req, res, next) => {
  try {
    let doc = await Schedule.findById(req.params.id)
      .populate("shifts")
      .populate({
        path: "dentist",
        populate: [
          {
            path: "degree",
          },
          {
            path: "expert",
          },
        ],
      })
      .lean(); //populate theo ten thuoc tinh k phai ten bang
    if (doc) {
      res.status(200).json({
        doc,
      });
    } else {
      res.status(400).json({
        status: "Can find any doc with that id!",
      });
    }
  } catch (error) {
    res.status(400).json({
      error: "Server can handle this request right now!",
    });
    next(error);
  }
};
exports.getAll = async (req, res, next) => {
  let options = {};
  if (req.query.day) options.day = req.query.day;
  if (req.query.month) options.month = req.query.month;
  if (req.query.year) options.year = req.query.year;
  if (req.query.dentist) options.dentist = req.query.dentist;
  if (req.query.shift) options.shift = { $in: [req.query.shift] };
  try {
    let doc = await Schedule.find(options)
      .populate("shifts")
      .populate({
        path: "dentist",
        populate: [
          {
            path: "degree",
          },
          {
            path: "expert",
          },
        ],
      })
      .lean();
    if (doc) {
      res.status(200).json({
        doc,
      });
    } else {
      res.status(400).json({
        status: c.STATUS_FAILURE,
        message: c.DOCUMENT_NOT_FOUND_ERROR,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: c.STATUS_FAILURE,
      message: c.UNKNOWN_ERROR_MSG,
    });
    next(error);
  }
};
exports.updateOne = base.updateOne(Schedule);
exports.deleteOne = base.deleteOne(Schedule);
