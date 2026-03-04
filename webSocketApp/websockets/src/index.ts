import { WebSocketServer } from "ws"

const wss = new WebSocketServer({port: 8000}); // created a web socket server

// app.get('/users', (req, res) => {
//})
wss.on('connection', (socket) => { 
    console.log("Connected to the client")

    socket.on("message", (e) => {
        console.log(e.toString())
        if (e.toString() === "ping") {
            return socket.send("pong")
        }
        socket.send("You haven't sent ping")
    })
})

// connection is persistant even across pages ... 

