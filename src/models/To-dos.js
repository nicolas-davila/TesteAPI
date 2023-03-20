import mongoose from "mongoose";

const ToDosSchema = new mongoose.Schema(
    {
        id: {type: String},
        toDo: {type: String},
        descricao: {type: String}
    }
)

const ToDos = mongoose.model('todos', ToDosSchema);

export default ToDos;