import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModal.js";

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const reciverId = req.params.id;
    const { message } = req.body;
    let getConversation = await Conversation.findOne({
      partcipants: { $all: [senderId, reciverId] },
    });

    if (!getConversation) {
      getConversation = await Conversation.create({
        partcipants: [senderId, reciverId],
      });
    }
    const newMessage = await Message.create({
      senderId,
      reciverId,
      message,
    });
    if (newMessage) {
      getConversation.messages.push(newMessage._id);
    }

    await getConversation.save();

    return res.status(201).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.log(error, "Error");
  }
};

export const getMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const reciverId = req.params.id;
    const conversation = await Conversation.find({
      partcipants: { $all: [senderId, reciverId] },
    }).populate("messages");
    return res.status(201).json(conversation?.messages);
  } catch (error) {
    console.log(error, "error");
  }
};
