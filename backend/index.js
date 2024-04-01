const express = require("express");
const { createTodo, updateTodo } = require("./type");
const { todo, completedtodo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

let ID=1;

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    {await todo.create({
        ID: ID,
        title: createPayload.title,
        description: createPayload.description,
        completed:" false "
    })}
    
    ID++

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req, res) {
     const todos = await todo.find({});

    res.json({
       todos
    })

})

app.get("/completedtodos", async function(req, res) {
    const completedtodos = await completedtodo.find({});

   res.json({
      completedtodos
      })

})


app.delete("/completed", async function(req, res) {
    const ID = req.body.ID;
    
        const reqdcompletedtask=await todo.findOne({ID})
    
    {if(reqdcompletedtask){
        await completedtodo.create({
            ID: ID,
            title: reqdcompletedtask.title,
            description: reqdcompletedtask.description,
            completed:" true "
        })}}
        await todo.deleteOne({ID})
        res.json({
            msg: "Todo deleted"
        })
    
})
app.delete("/todonotcompleted", async function(req, res) {
    const ID = req.body.ID;
    
        const reqduncompletedtask=await completedtodo.findOne({ID})
    
    {if(reqduncompletedtask){
        await todo.create({
            ID: ID,
            title: reqduncompletedtask.title,
            description: reqduncompletedtask.description,
            completed:"false"
        })}}
        await completedtodo.deleteOne({ID})
        res.json({
            msg: "Todo deleted"
        })
    
})
app.put("/edit", async function(req,res){
    const editedword=req.body;

   await todo.updateOne({ID:req.body.ID},{title:req.body.title,description:req.body.description})


})
app.delete("/delete", async function(req, res) {
    const ID = req.body.ID;
    
        await completedtodo.deleteOne({ID});
        await todo.deleteOne({ID});

        res.json({
            msg: "Todo deleted"
        })
    })

app.listen(3000);