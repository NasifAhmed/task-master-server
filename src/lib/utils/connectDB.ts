import mongoose from "mongoose";

require("dotenv").config();

export const connectDB = async function () {
    let uri = process.env.DB_URL?.replace(
        "<username>",
        process.env.DB_USER as string
    ).replace("<password>", process.env.DB_PASSWORD as string);
    await mongoose.connect(uri as string, { dbName: process.env.DB_NAME });
    console.log("Conntected to database !");
};
