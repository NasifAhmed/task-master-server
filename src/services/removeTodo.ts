import { Todo } from "../models/Todo";

export async function removeTodo(_id: string) {
    try {
        const res = await Todo.deleteOne({ _id: `${_id}` });
        console.log(`Todo ${_id} deleted successfully`);
        console.log(res);
        return res;
    } catch (error) {
        console.log("Error querying Todo: ", error);
    }
}
