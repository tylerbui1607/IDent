const mongoose = require("mongoose");
const joi = require("joi");
const { string } = require("joi");

const shiftSchema = mongoose.Schema(
  {
    name: String,
    from: String,
    to: String,
  },
  {
    versionKey: false,
  }
);

const validate = (shift) => {
  const schema = joi.object({
    name: joi.string().required(),
    from: joi.string().min(3).max(5).required(),
    to: joi.string().min(3).max(5).required(),
  });
  return schema.validate(shift);
};

const Shift = mongoose.model("shift", shiftSchema);

module.exports = {
  Shift,
  validate,
};
