import express from "express";
import {Todos, Users} from "../db/db.js"
import { Authentication, todoAccess } from "../middlewares/auth.js";
import jwt from "jsonwebtoken";
import {z} from "zod";
const app = express();
const router = express.Router();

const UserSchema = z.object({
    username:  z.string().min(6).max(20).email(),
    password: z.string().min(6).max(20)
});

const numberSchema = z.number();
const todoSchema = z.object({
    title: z.string().max(20),
    description: z.string().max(60)
})

router.post("/login", async(req,res) => {
    const parsedInput = UserSchema.safeParse(req.body);
    if(parsedInput.error){
        res.status.json({message : parsedInput.error});
        return;
    }

    const userFound = await Users.findOne({username: username, password: password});
    if(userFound){
        const token = jwt.sign({username: parsedInput.data.username, password: parsedInput.data.password}, "SEcret", {expiresIn:"1h"});
        res.send({message: "login up successfully", token: token});
    }
    else{
        res.status(404).send({message : "User not found"});
    }
});

router.post("/signup", async(req, res) => {
    const parsedInput = UserSchema.safeParse(req.body);
    if(parsedInput.error){
        res.status(411).json({message : parsedInput.error});
        return;
    }
    try{
        const token = jwt.sign({username: parsedInput.data.username, password: parsedInput.data.password}, "SEcret", {expiresIn:"1h"});
        const newUser = new Users({
            username: parsedInput.data.username,
            password: parsedInput.data.password
        });
        await newUser.save();
        res.send({message: "signed up successfully", token: token});
    }
    catch(err){
        console.log(err);
        res.status(402).send({message : err});
    }
});


router.get("/alltodos", Authentication,async (req, res) => {
    const userId = numberSchema.safeParse(req.user._id);
    if(!userId.success){
        res.status(411).json({message: userId.error});
        return;
    }

    try{
        const user = await Users.findById(userId).populate("todos");
        const todos = user.todos;
        res.status(200).json({todos: todos});
    }

    catch(err){
        res.status.json({message : err});
    }
});

router.get("/:id",Authentication, todoAccess,async (req, res) => {
    const id = numberSchema(req.params.id);
    if(!userId.success){
        res.status(411).json({message: userId.error});
        return;
    }
    const todo = await Todos.findOne({_id: id});
    if(todo){
      res.status(200).send(todo);
    }
    else{
      res.status(404).send("todo not found");
    }
});

router.post("/addtodo", Authentication,  async (req, res) => {
    const todoInput = todoSchema(req.body);

    if(todoInput.error){
        res.json({message: todoInput.error});
        return;
    }

    const todo = new Todos(todoInput.data);
    try{
        await todo.save();
        await Users.updateOne({_id: req.user._id}, {$push:{todos:todo}});
        res.json({message: "todo added successfully",id : todo.id });
    }
    catch(err){
        console.log(err);
    }
});

router.put("/:id",Authentication, todoAccess,async (req, res)=>{
    
    const id = numberSchema(req.params.id);
    if(id.error){
        res.json({message: id.error});
        return;
    }

    try{
        const todo = await Todos.findOneAndUpdate({_id : id}, {title:req.body.title, description: req.body.description}, {returnDocument:"after"});
        if(todo){
            res.status(200).send({message: "todo updated successfully", updatedTodo : todo});
        }
        else{
            res.status(404).send({message: "todo not found"});
        }
    }
    catch(err){
        res.status(411).send({message: err});
    }
});

router.delete("/:id",Authentication, todoAccess,async (req, res) => {
    var id = numberSchema(req.params.id);
    if(id.error){
        res.json({message: id.error});
        return;
    }

    try{
        const todo = await Todos.findOne({_id : id});
        if(todo){
            await Todos.findOneAndDelete({_id : id});
            res.status(200).send({message: "todo deleted"});
        }
        else{
            res.status(404).send("todo not found");
        }
    }
    catch(err){
        res.status(411).send({message: err});

    }
});


export {router};