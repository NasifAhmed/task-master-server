import { Request, Response } from "express";
import { removeTodo } from "../services/removeTodo";

export function deleteTodo(req: Request, res: Response) {
    removeTodo(req.query._id as string).then((response) => {
        return res.send(response);
    });
}
