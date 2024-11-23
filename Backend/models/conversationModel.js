import mongoose from "mongoose";

const conversationModel = new mongoose({
    partcipants : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }],
    messages : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Message"
    }],

},{timeStamps : true})

export const Conversation = mongoose.model("Conversation", conversationModel)