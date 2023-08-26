import {Users} from "../db/db.js";
import jwt from "jsonwebtoken";


export async function Authentication(req, res, next){
    try{
        const bearer_token = req.headers.authorization;
        const token = bearer_token.split(" ")[1];
        const username_password = jwt.verify(token, "SEcret");
        
        const {username, password} = username_password;

        const userFound = await Users.findOne({username: username, password:password});
        if(userFound){
            req.user = userFound;
            next();
        }
        else{
            res.status(404).send({message: "User not found"});
        }
    }
    catch(err){
        res.status(400).send({message:"login again. token expired"});
    }
}

export async function todoAccess(req, res, next){
    const todoIds = req.user.todos;
    const _id = req.params.id;
    const todoFound = todoIds.find((id) => id == _id);
    if(todoFound){
        next();
    }
    else{
        res.status(401).send("User don't have access to this todo or todo not found");
    }
}