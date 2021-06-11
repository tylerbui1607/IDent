const mongoose = require("mongoose");
const joi = require("joi");

const dentistSchema = mongoose.Schema({
  name: String,
  degree: { type: mongoose.Schema.Types.ObjectId, ref: "degree" },
  idNumber: String,
  phone: String,
  expert: [{ type: mongoose.Schema.Types.ObjectId, ref: "service" }],
});

const validate = (dentist) => {
  const schema = joi.object({
    name: joi.string().required().min(5),
    degree: joi.string().required(),
    idNumber: joi.string().min(9).required(),
    phone: joi.string().required(),
    expert: joi.array().items(joi.string()).required(),
  });
  return schema.validate(dentist);
};

const Dentist = mongoose.model("dentist", dentistSchema);

module.exports = {
  Dentist,
  validate,
};
