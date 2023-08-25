import express from "express";
import {Todos, Users} from "../db/db.js"
import { Authentication, todoAccess } from "../middlewares/auth.js";
import jwt from "jsonwebtoken";
const app = express();
const router = express.Router();


router.post("/login", async(req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userFound = await Users.findOne({username: username, password: password});
    if(userFound){
        const token = jwt.sign({username: username, password: password}, "SEcret", {expiresIn:"1h"});
        res.send({message: "login up successfully", token: token});
    }
    else{
        res.status(404).send({message : "User not found"});
    }
});

router.post("/signup", async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try{
    const token = jwt.sign({username: username, password: password}, "SEcret", {expiresIn:"1h"});
    const newUser = new Users({
        username: username,
        password: password
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
    const userId = req.user._id;
    const user = await Users.findById(userId).populate("todos");
    const todos = user.todos;
    res.status(200).json(todos);
});

router.get("/:id",Authentication, todoAccess,async (req, res) => {
    const id = req.params.id;
    const todo = await Todos.findOne({_id: id});
    if(todo){
      res.status(200).send(todo);
    }
    else{
      res.status(404).send("todo not found");
    }
});

router.post("/addtodo",Authentication,  async (req, res) => {
    const todo = new Todos({
        title: req.body.title,
        description: req.body.description
    });
    try{
        await todo.save();
        await Users.updateOne({_id: req.user._id}, {$push:{todos:todo}});
        res.json({id : todo.id });
    }
    catch(err){
        console.log(err);
    }
});

router.put("/:id",Authentication, todoAccess,async (req, res)=>{
    const id = req.params.id;
    const todo = await Todos.findOneAndUpdate({_id : id}, {title:req.body.title, description: req.body.description}, {returnDocument:"after"});
    if(todo){
        res.status(200).json(todo);
    }
    else{
        res.status(404).end();
    }
});

router.delete("/:id",Authentication, todoAccess,async (req, res) => {
    var id = req.params.id;
    const todo = await Todos.findOne({_id : id});
    if(todo){
        await Todos.findOneAndDelete({_id : id});
        res.status(200).end();
    }
    else{
        res.status(404).send("todo not found");
    }
});


export {router};