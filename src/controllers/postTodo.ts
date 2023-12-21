import { Request, Response } from "express";
import { insertTodo } from "../services/insertTodo";

export function postTodo(req: Request, res: Response) {
    insertTodo(req.body).then((response) => {
        return res.send(response);
    });
}
