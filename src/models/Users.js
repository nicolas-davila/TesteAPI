import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String},
        email: {type: String},
        senha: {type: Number}
    }
)

const Users = mongoose.model('user', userSchema);

export default Users;