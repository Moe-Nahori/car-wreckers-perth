import { Server } from 'socket.io';
import { createServer } from 'http';
import express from 'express';
import { ChatMessage, ChatRoom } from '../src/types/chat';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST']
  }
});

const chatRooms = new Map<string, ChatRoom>();

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('join_room', (roomId: string) => {
    socket.join(roomId);
    if (!chatRooms.has(roomId)) {
      chatRooms.set(roomId, {
        id: roomId,
        messages: [],
        participants: new Set()
      });
    }
    chatRooms.get(roomId)?.participants.add(socket.id);
  });

  socket.on('send_message', (message: ChatMessage) => {
    const room = chatRooms.get(message.roomId);
    if (room) {
      room.messages.push(message);
      io.to(message.roomId).emit('receive_message', message);
    }
  });

  socket.on('disconnect', () => {
    chatRooms.forEach(room => {
      room.participants.delete(socket.id);
    });
  });
});

const PORT = process.env.CHAT_SERVER_PORT || 8006;
httpServer.listen(PORT, () => {
  console.log(`Chat server running on port ${PORT}`);
});