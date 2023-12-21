import { Request, Response } from "express";
import { queryTodo } from "../services/queryTodo";

export function getTodo(req: Request, res: Response) {
    queryTodo().then((response) => {
        return res.send(response);
    });
}
