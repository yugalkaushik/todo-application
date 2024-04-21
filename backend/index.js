const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors =  require("cors");
const app = express();

//[for a non authenticated app]

app.use(express.json());
app.use(cors());

//body{
        //title:string;
        //description:string;
//}

//post endpoint for creating todo
app.post("/todo", async function(req,res){   
      const createPayload = req.body;
      const parsedPayload = createTodo.safeParse(createPayload);

      if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
      }
      // put it in mongodb
      await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
      })
      
      res.json({
        msg:"todo created"
      })
})


//get endpoint for getting all the todos
app.get("/todos", async function(req,res){
    //const todos = await todo.find({});
    res.json({
        todos:[]
    })
})


//put endpoint for marking a specific todo as completed
app.put("/completed", async function(req,res){
      const updatePayload = req.body;
      const parsedPayload = updateTodo.safeParse(updatePayload);
      if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
      }
      await todo.update({
        _id: req.body.id
      },{
          complted: true
      })
      res.json({
        msg: "todo marked as completed"
      })
})

app.listen(3001);