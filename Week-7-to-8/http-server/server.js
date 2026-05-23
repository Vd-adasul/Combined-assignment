// start creating server here
const express = require("express"); 
const PORT = 3000; 
const app = express(); 

var todos  = {}; 
let id = 1;
app.use(express.json()); 

app.post("/create/todo",(req,res)=>{
    
    const {title, description} = req.body
    const obj1 ={};
    obj1.title=title; 
    obj1.description = description; 

    todos[id] = obj1;
    id++;
    res.json(todos)

})

app.get("/todos",(req,res)=>{
    res.json(todos)
})

app.get("/todo",(req,res)=>{
    const val = req.query.id
    if(!todos.val){
        res.status(404).json({"error":"Todo not found"})
    }else{
        res.json(todos.val);
    }
})
app.delete("/todo", (req,res)=>{
    const val = req.query.id; 
    if(!todos.val){
        res.status(404).json({"error":"Todo not found"})
    }else{
        delete todos[val];
        res.status(200);
    }
})

