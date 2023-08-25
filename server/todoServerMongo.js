const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const todoSchema = new mongoose.Schema({
    title: String,
    description: String
});

const Todos = mongoose.model("Todos", todoSchema);

mongoose.connect("mongodb+srv://brihat7:HBSLd1pcTTVD8pwh@cluster0.fcaoknh.mongodb.net/todos");

app.get("/todos", async (req, res) => {
    const todos = await Todos.find();
    res.status(200).json(todos);
});

app.get("/todos/:id", async (req, res) => {
    const id = Number(req.params);
    const todo = await Todos.findOne({_id: id});
    if(todo){
      res.status(200).send(todo);
    }
    else{
      res.status(404).send("todo not found");
    }
});

app.post("/todos", async (req, res) => {
    const todo = new Todos({
        title: req.body.title,
        description: req.body.description
    });
    await todo.save();
    res.json({id : todo.id });
});

app.put("/todos/:id",  async (req, res)=>{
    const todo = await Todos.findOneAndUpdate({_id : req.params.id}, {title:req.body.title, description: req.body.description}, {returnDocument:"after"});
    if(todo){
        res.status(200).json(todo);
    }
    else{
        res.status(404).end();
    }
});

app.delete("/todos/:id",  async (req, res) => {
    var id = req.params.id;
    const todo = await Todos.findById(id);
    if(todo){
        await Todos.findOneAndDelete({_id : id});
        res.status(200).end();
    }
    else{
        res.status(404).send("todo not found");
    }
});



app.listen(3000, ()=> console.log("Server listening at 3000"));