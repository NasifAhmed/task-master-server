import { Router } from "express";
import morgan from "morgan";
import { deleteTodo } from "../controllers/deleteTodo";
import { getTodo } from "../controllers/getTodo";
import { postTodo } from "../controllers/postTodo";

export const todoRouter = Router();

todoRouter.get("/todo", morgan("dev"), getTodo);
todoRouter.post("/todo", morgan("dev"), postTodo);
todoRouter.delete("/todo", morgan("dev"), deleteTodo);
