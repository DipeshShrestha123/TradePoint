import { Schema, model } from "mongoose";

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

const HoldingsModel = model("AllHoldings", HoldingsSchema);

export { HoldingsModel };
