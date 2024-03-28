const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/todoapp').then(()=>{
    console.log('connection successfull');
}).catch((e)=>{
    console.log(e);
})

const todoSchema=mongoose.Schema({
    ID:Number,
    title:String,
    description:String,
    completed:String
})
const todo = mongoose.model('todo',todoSchema);

const completedtodoSchema=mongoose.Schema({
    ID:Number,
    title:String,
    description:String,
    completed:String
})
const completedtodo = mongoose.model('completedtodo',completedtodoSchema);

module.exports={
    todo,
    completedtodo
}