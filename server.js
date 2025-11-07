import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import Redis from "ioredis";

const app = express();
const server = createServer(app);
const io = new Server(server);
const redis = new Redis();

app.use(express.static("public"));

io.on("connection", async (socket) => {
  socket.on("register", async (username) => {
    socket.username = username;
    console.log(`🟢 ${username} conectado`);

    const history = await redis.lrange("chat:messages", 0, 19);
    socket.emit(
      "history",
      history.reverse().map((msg) => JSON.parse(msg))
    );
  });

  socket.on("message", async (msg) => {
    const messageData = JSON.stringify(msg);
    await redis.lpush("chat:messages", messageData);
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    if (socket.username) {
      console.log(`🔴 ${socket.username} desconectado`);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () =>
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
);
