import mongoose, { Schema } from "mongoose";

const serCategory = new Schema({
    services:String,
    category:String,
    price:Number,
    duration:String,
    gender:String
})

export default mongoose.model("SerCategory",serCategory)