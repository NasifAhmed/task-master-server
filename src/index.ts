import cors from "cors";
import express from "express";
import morgan from "morgan";
import { todoRouter } from "../src/routes/todoRoutes";
import { connectDB } from "./lib/utils/connectDB";
import { globalErrorHandler } from "./lib/utils/globalErrorHandler";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: [
            process.env.LOCAL_CLIENT as string,
            process.env.MAIN_CLIENT as string,
        ],
    })
);
app.use(express.json());

// Root route of the server
app.get("/", (req, res) => {
    res.send("Server is running....");
});

// Routes
app.use(todoRouter);

// Error handling
app.all("*", morgan(`tiny`), (req, res, next) => {
    const error: any = new Error(`Can't find ${req.originalUrl} on the server`);
    error.status = 404;
    next(error);
});
app.use(globalErrorHandler);

const runServer = async function () {
    try {
        await connectDB();
    } catch (error) {
        console.log(`DB connection ERROR : ${error}`);
    }
    app.listen(PORT, () => {
        console.log("Server is running on port :", PORT);
    });
};

runServer();
