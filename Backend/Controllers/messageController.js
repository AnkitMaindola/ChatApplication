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
      newMessage: newMessage,
    });
  } catch (error) {
    console.log(error, "Error");
  }
};

export const getMessage = async (req, res) => {
  try {
    const senderId = req.id;           // Sender's ID from authenticated user
    const receiverId = req.params.id;  // Receiver's ID from the URL parameter

    // Find the conversation between the sender and receiver
    const conversation = await Conversation.findOne({
      partcipants: { $all: [senderId, receiverId] },
    }).populate("messages");  // Populate full message details

    // Check if the conversation exists
    if (!conversation) {
      return res.status(201).json([]);
    }

    // Extract messages from the conversation
    const messages = conversation.messages;  // This will be an array of message objects

    return res.status(200).json(messages);  // Send messages as JSON
  } catch (error) {
    console.error(error, "Error retrieving messages");
    return res.status(500).json({ message: "Internal server error" });
  }
};

