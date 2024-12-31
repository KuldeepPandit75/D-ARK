import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    money:{
        type:Number,
        required:true
    },
    items:{
        type:Object,
        required:true
    }
})

const User= mongoose.model("User",UserSchema);

export default User;