const mongoose = require("mongoose");
const joi = require("joi");

const subSchema = mongoose.Schema({
  shift: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "shift",
  },
});

const scheduleSchema = mongoose.Schema({
  dentist: { type: mongoose.Schema.Types.ObjectId, ref: "dentist" },
  shifts: [{ type: mongoose.Schema.Types.ObjectId, ref: "shift" }],
  day: Number,
  month: Number,
  year: Number,
});

function validate(schedule) {
  let schema = joi.object({
    dentist: joi.string().min(5).required(),
    shifts: joi.array().items(joi.string()).required(),
    day: joi.number().min(1).max(31).required(),
    month: joi.number().min(1).max(12).required(),
    year: joi.number().min(0).required(),
  });
  return schema.validate(schedule);
}

const Schedule = mongoose.model("schedule", scheduleSchema);

module.exports = {
  Schedule,
  validate,
};
