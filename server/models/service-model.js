const { Schema, model } = require("mongoose");

const topicSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const serviceSchema = new Schema({
  service: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  provider: { type: String, required: true },
  topics: [topicSchema], 
});

const Service = model("Service", serviceSchema);

module.exports = Service;
