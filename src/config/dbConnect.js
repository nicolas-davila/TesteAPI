import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mateus:vzVVSNvtoL9B7M65@cluster0.e91rvpv.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection;

export default db;

// vzVVSNvtoL9B7M65