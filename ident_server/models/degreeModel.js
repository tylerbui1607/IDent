const mongoose = require("mongoose");
const joi = require("joi");

const degreeSchema = mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

const validate = (degree) => {
  const schema = joi.object({
    name: joi.string().min(5).required(),
  });
  return schema.validate(degree);
};

const Degree = mongoose.model("degree", degreeSchema);

module.exports = {
  Degree,
  validate,
};
