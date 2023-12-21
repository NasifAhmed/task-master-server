import { Router } from "express";
import morgan from "morgan";
import { deleteTodo } from "../controllers/deleteTodo";
import { getTodo } from "../controllers/getTodo";
import { postTodo } from "../controllers/postTodo";

const router = Router();

router.get("/todo", morgan("dev"), getTodo);
router.post("/todo", morgan("dev"), postTodo);
router.delete("/todo", morgan("dev"), deleteTodo);
