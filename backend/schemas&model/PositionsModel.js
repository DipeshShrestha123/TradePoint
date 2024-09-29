import { Schema, model } from "mongoose";

const PositionsSchema = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

// Create the Orders model
const PositionModel = model("AllPosition", PositionsSchema);

export { PositionModel };