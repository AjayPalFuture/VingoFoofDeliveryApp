import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"
import shopRouter from "./routes/shop.routes.js"
import itemRouter from "./routes/item.routes.js"
import orderRouter from "./routes/order.routes.js"
import http from "http"
import { Server } from "socket.io"
import socketHandler from "./socket.js"

dotenv.config()
const port = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)

// ✅ Socket.IO CORS config
const io = new Server(server, {
  cors: {
    origin: [
      // "http://localhost:5173",
     "https://super-sawine-febf68.netlify.app"

    
    ],
    methods: ["GET", "POST"],
    credentials: true,
  }
})

app.set("io", io)

// ✅ Express CORS config (fix: credentials alag likhna hai)
app.use(cors({
  origin: [
    // "http://localhost:5173",
       "https://super-sawine-febf68.netlify.app"
   
  ],
  credentials: true,
}))

app.use(express.json())
app.use(cookieParser())

// ✅ Routes
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/shop", shopRouter)
app.use("/api/item", itemRouter)
app.use("/api/order", orderRouter)

// ✅ Socket.IO handler
socketHandler(io)

server.listen(port, () => {
  console.log(`🚀 Server started at port ${port}`)
  connectDb()
})
