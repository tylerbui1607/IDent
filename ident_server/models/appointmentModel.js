const mongoose = require("mongoose");
const joi = require("joi");

const appointmentSchema = mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    service: { type: mongoose.Schema.Types.ObjectId, ref: "service" },
    dentist: { type: mongoose.Schema.Types.ObjectId, ref: "dentist" },
    status: {
      type: String,
      enum: ["pending", "complete", "cancel"],
      default: "pending",
    },
    hour: Number,
    minute: Number,
    year: Number,
    month: Number,
    day: Number,
    email: String,
  },
  {
    versionKey: false,
  }
);

function validate(appointment) {
  const schema = joi
    .object({
      customer: joi.string().min(5).required(),
      service: joi.string().min(5).required(),
      dentist: joi.string().min(5).required(),
      hour: joi.number().min(0).max(24).required(),
      minute: joi.number().min(0).max(60).required(),
      year: joi.number().min(0).required(),
      month: joi.number().min(1).max(12).required(),
      day: joi.number().min(1).max(31).required(),
      email: joi.string().email().required(),
    })
    .unknown(true);
  return schema.validate(appointment);
}

const Appointment = mongoose.model("appointment", appointmentSchema);

module.exports = {
  Appointment,
  validate,
};
