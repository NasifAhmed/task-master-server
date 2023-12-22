import { Todo } from "../models/Todo";

export async function queryTodo(filter: any) {
    const sortField: any = {};
    if (filter.sort) {
        if (filter.sort.startsWith("-")) {
            sortField[filter.sort.slice(1)] = -1;
        } else {
            sortField[filter.sort] = 1;
        }
        delete filter.sort;
    }
    try {
        const cursor = await Todo.find(filter).sort(sortField).exec();
        return cursor;
    } catch (error) {
        console.log("Error querying Todo: ", error);
    }
}
