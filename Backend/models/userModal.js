import mongoose from "mongoose";

const userModal = mongoose.Schema({
    fullName : {
        required : true,
        type : String
    },
    username : {
        required : true,
        type : String,
        unique : true
    },
     password: {
        required : true,
        type : String
    },
    profilePhoto : {
        required : true,
        default : "",
    },
    gender : {
        required : true,
        type : String,
        enum : ["male","female"]
    }
},{timeStamps : true})

export const User = mongoose.model("User", userModal)