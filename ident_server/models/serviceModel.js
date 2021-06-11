const mongoose = require("mongoose");
const joi = require("joi");

const serviceSchema = mongoose.Schema(
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

const Service = mongoose.model("service", serviceSchema);

module.exports = {
  Service,
  validate,
};
