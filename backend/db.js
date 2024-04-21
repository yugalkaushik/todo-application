const mongoose =  require("mongoose");

mongoose.connect("mongodb+srv://admin:4ypi7QwTTYQElbJB@cluster0.laay3py.mongodb.net/todo")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);
module.exports = {
    todo
}