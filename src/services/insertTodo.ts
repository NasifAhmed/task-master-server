import { Todo } from "../models/Todo";

export async function insertTodo() {
    const todo = {
        owner: "test@test.com",
        title: "Todo Title",
        desc: "Todo Desc",
        status: "Todo",
        deadline: "2023-12-21T06:19:21+00:00",
    };

    try {
        const res = await Todo.updateOne(todo, {
            upsert: true,
        });
        console.log("Todo inserted successfully");
        console.log(res);
        return res;
    } catch (error) {
        console.log("Error inserting TODO : ", error);
    }
}
