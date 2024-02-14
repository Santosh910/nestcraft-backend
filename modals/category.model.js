import mongoose, { Schema } from "mongoose";

const category = new Schema({
    category_name:String,
    description:String,
    image:String
})

export default mongoose.model("Category",category)