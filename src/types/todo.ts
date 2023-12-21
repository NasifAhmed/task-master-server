import { Types } from "mongoose";

export type TodoType = {
    _id?: Types.ObjectId;
    owner: string;
    title: string;
    desc: string;
    status: string;
    deadline: string;
};
