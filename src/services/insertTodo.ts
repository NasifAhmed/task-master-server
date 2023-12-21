import { Todo } from "../models/Todo";
import { TodoType } from "../types/todo";

export async function insertTodo(todo: TodoType) {
    // const todo = {
    //     owner: "test@test.com",
    //     title: "Todo Title",
    //     desc: "Todo Desc",
    //     status: "Todo",
    //     deadline: "2023-12-21T06:19:21+00:00",
    // };

    try {
        if (todo?._id) {
            const res = await Todo.updateOne({ _id: todo._id }, todo);
            console.log("Todo updated");
            console.log(res);
            return res;
        } else {
            const todoData = new Todo(todo);
            const res = await todoData.save();
            console.log("Todo inserted");
            console.log(res);
            return res;
        }
    } catch (error) {
        console.log("Error inserting TODO : ", error);
    }
}
