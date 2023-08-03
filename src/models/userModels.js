import mongoose from "mongoose";


const UserSchema=new mongoose.Schema({
    name:
    {
        type:String
    },
    email:{
        type:String,
    },
    message:{
        type:String, 
    }
})


const User=mongoose.models.users||mongoose.model("users",UserSchema);

export default User;