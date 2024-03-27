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
    completed:Boolean
})
const todo = mongoose.model('todo',todoSchema);

module.exports={
    todo
}