import { Types } from "mongoose";
import { Todo } from "../models/Todo";

export async function removeTodo(filter: { _id: Types.ObjectId }) {
    try {
        const res = await Todo.deleteOne(filter);
        console.log(`Todo ${filter._id} deleted successfully`);
        console.log(res);
        return res;
    } catch (error) {
        console.log("Error querying Todo: ", error);
    }
}
