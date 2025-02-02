import {Server} from "socket.io";
import http from "http";
import express from "express"


const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: 'http://localhost:3000', // Remove trailing slash
        methods:['GET', 'POST'],
    },
});

const userSocketMap = {};
io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);
    const  userId = socket.handshake.query.userId;
    if(userId != undefined){
      userSocketMap[userId] = socket.id
      console.log(userSocketMap, "userSocketMap");
      
    }
    io.emit('getOnlineUsers',Object.keys(userSocketMap))
    socket.on('disconnect', () => {
      console.log('Socket disconnected:', socket.id);
      delete userSocketMap[userId];
      io.emit('getOnlineUsers',Object.keys(userSocketMap))
    });
  });


export {app,io,server};

