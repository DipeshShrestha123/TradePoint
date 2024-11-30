import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
// import authRouter from "../backend/routes/auth.route.js";
import {HoldingsModel} from "./schemas&model/HoldingsModel.js"
import { OrdersModel } from "./schemas&model/OrdersModel.js";
import { PositionModel } from "./schemas&model/PositionsModel.js";
import ApiError from "./utils/ApiError.js";
import cors from "cors"
import authRouter from "./routes/auth.route.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080 ;
const MONGO_URL = process.env.MONGO_URL;


app.listen(PORT, () => {
    console.log(`Port is listening in ${PORT}`);
  });

// Connect to MongoDB
async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB");
    } catch (err) {
        console.error("Failed to connect to DB", err);
    }
}

main();
app.get("/",(req,res) =>{
    res.send("hey");
})

app.use(authRouter)

app.get("/allHoldings", async (req, res) => {
    try{
        let allHoldings = await HoldingsModel.find({});
        res.json(allHoldings);
    }
    catch(err){
        throw new ApiError(408, "Something Went Wrong");
    }
  });
  
app.get("/allPositions", async (req, res) => {
    try{
        let allPositions = await PositionModel.find({});
        res.json(allPositions);
    }
    catch(err){
        throw new ApiError(408, "Something Went Wrong");
    }
  });
  
app.post("/newOrder", async (req, res) => {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
  
    newOrder.save();
  
    res.send("Order saved!");
  });
  
  