// NOTE: This model is for development purpose only

import { Schema, model } from "mongoose";

const devSchema = new Schema({
  name: String,
  message: String
})

const modelling = model("devDocument", devSchema);

export { modelling as devModel }