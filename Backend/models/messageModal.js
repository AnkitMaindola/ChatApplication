import mongoose from "mongoose";

const messageModal = new mongoose.Schema({
    senderId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    reciverId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    message : {
        type : String,
        required : true
    }
},{timeStamps : true})

export const Message = mongoose.model("Message",messageModal)