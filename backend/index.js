const express = require("express");
const { createTodo, updateTodo } = require("./type");
const { todo } = require("./db");
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
    // put it in mongodb
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

app.delete("/completed", async function(req, res) {
    const ID = req.body.ID;
   /*  const parsedPayload = updateTodo.safeParse(updatePayload); */
   /*  if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    } */

    await todo.deleteOne({
        ID: ID
    } 
    )

    res.json({
        msg: "Todo marked as completed"
    }) 

})

app.listen(3000);