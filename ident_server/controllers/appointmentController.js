const c = require("../constants");
const base = require("./baseController");
const { Appointment, validate } = require("../models/appointmentModel");

exports.addOne = async (req, res, next) => {
  if (req.sendEmailErr) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter",
    });
    return;
  }
  try {
    let appointment = await Appointment.create(req.body);
    res.status(201).json({
      status: "success",
      appointment,
    });
    req.appointment = appointment;
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter",
    });
  }
};
exports.getAll = base.getAll(Appointment);
exports.getOne = base.getOne(Appointment);
exports.updateOne = base.updateOne(Appointment);
exports.deleteOne = base.deleteOne(Appointment);
exports.getOneByEmail = async (req, res, next) => {
  try {
    console.log(req.user);
    const doc = await Appointment.find({ email: req.user.email }).lean();
    if (!doc) {
      res.status(404).json({
        message: c.APPOINTMENT_NOT_FOUND_MSG,
      });
      return;
    }
    res.status(200).json({
      status: c.STATUS_SUCCESS,
      data: doc,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: c.STATUS_FAILURE,
      message: c.UNKNOWN_ERROR_MSG,
    });
    next(error);
  }
};
exports.getByUserId = async (req, res, next) => {
  try {
    let appointments = await Appointment.find({
      customer: req.params.id,
    })
      .select("-customer")
      .populate("dentist", "name")
      .populate("service", "name");
    if (appointments.length) {
      res.status(200).json({
        status: "success",
        appointments,
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "No appointment found with that customer",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter",
    });
  }
};
