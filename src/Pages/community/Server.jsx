const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let groups = [{ name: "General", description: "General discussion" }];

app.use(express.json());

// API routes
app.get("/groups", (req, res) => {
  res.json(groups);
});

app.post("/groups", (req, res) => {
  const group = req.body;
  groups.push(group);
  res.status(201).json(group);
});

// WebSocket events
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("joinGroup", (groupName) => {
    socket.join(groupName);
    console.log(`User joined group: ${groupName}`);
  });

  socket.on("message", (data) => {
    io.to(data.group).emit("message", { content: data.content });
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
