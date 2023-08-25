import {mongoose} from "mongoose";

const todoSchema = new mongoose.Schema({
    title: String,
    description: String
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    todos : [{type: mongoose.Schema.Types.ObjectId,ref: "Todos"}]
});

const Todos = mongoose.model("Todos", todoSchema);
const Users = mongoose.model("Users", userSchema);

export {Todos, Users};