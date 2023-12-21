import { Request, Response } from "express";
import { removeTodo } from "../services/removeTodo";

export function deleteTodo(req: Request, res: Response) {
    removeTodo(req.body).then((response) => {
        return res.send(response);
    });
}
