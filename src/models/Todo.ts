import mongoose from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema({
    owner: String,
    title: String,
    desc: String,
    status: String,
    deadline: Date,
});

export const Todo = mongoose.model("Todo", todoSchema);
