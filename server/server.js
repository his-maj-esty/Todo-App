import express from "express";
import {router} from "./routes/todoRoutes.js"
import mongoose from "mongoose";
import cors  from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/todos", router);

mongoose.connect("mongodb+srv://brihat7:HBSLd1pcTTVD8pwh@cluster0.fcaoknh.mongodb.net/todosServer");
app.listen(3000, ()=> console.log("Server listening at 3000"));
