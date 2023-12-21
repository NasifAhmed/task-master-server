import { Todo } from "../models/Todo";

export async function queryTodo() {
    try {
        const cursor = await Todo.find().exec();
        return cursor;
    } catch (error) {
        console.log("Error querying Todo: ", error);
    }
}
