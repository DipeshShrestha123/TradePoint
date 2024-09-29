import { Schema, model } from "mongoose";

// Define the Orders Schema
const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

// Create the Orders model
const OrdersModel = model("Orders", OrdersSchema);

export { OrdersModel };
