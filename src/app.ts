import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoute } from "./modules/student/student.route";
import { AdminRoute } from "./modules/admin/admin.route";
import { CourseRoute } from "./modules/course/course.route";
import { userRoute } from "./modules/users/user.route";
const app: Application = express();
;
import http from "http";
import { Server } from "socket.io";

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// To store players in rooms
const rooms = {};

// Middleware
app.use(express.json());
app.use(cors());

// Example route
app.get("/", (req, res) => {
  res.send("Server is running.");
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("joinGame", (gameId) => {
    if (!rooms[gameId]) {
      rooms[gameId] = [];
    }

    // Add player to the room if less than 2 players are connected
    if (rooms[gameId].length < 2) {
      rooms[gameId].push(socket.id);
      socket.join(gameId);

      console.log(
        `User ${socket.id} joined game ${gameId}. Players in room: ${rooms[gameId].length}`
      );

      // Notify the players in the room
      io.to(gameId).emit("playerJoined", rooms[gameId].length);

      // Check if the room now has 2 players
      if (rooms[gameId].length === 2) {
        io.to(gameId).emit("startGame", { players: rooms[gameId] });
      }
    } else {
      socket.emit("roomFull", "This room is full. Try another game.");
    }
  });

  socket.on("diceRolled", ({ gameId, player, value }) => {
    io.to(gameId).emit("updateDiceState", { player, value });
  });

  // Handle user disconnecting
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);

    for (const gameId in rooms) {
      rooms[gameId] = rooms[gameId].filter((id) => id !== socket.id);
      io.to(gameId).emit("playerLeft", rooms[gameId].length);
    }
  });
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});


app.use(express.json());
app.use(cors());

app.use("/api", StudentRoute);
app.use("/api", AdminRoute);
app.use("/api", CourseRoute);
app.use("/api", StudentRoute);
app.use("/api", userRoute);


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Not Found Route Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err: any, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "An unexpected error occurred",
  });
});

export default app;
