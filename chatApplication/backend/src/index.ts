import { WebSocketServer, WebSocket } from 'ws'

const ws = new WebSocketServer({ port: 8080 })

type Users = {
    socket: WebSocket, 
    room: String
}

let allSockets: Users[] = [];

// webSocket only takes either string or binary.

ws.on("connection", (socket) => {
    
    socket.on("message", (message) => {
        // string to an object 
        //@ts-ignore
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === "join") {
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            })
        }

        if (parsedMessage.type === "chat") {
            //@ts-ignore
            let currentUserRoom = allSockets.find((s) => s.socket === socket).room
            for (let i = 0 ; i < allSockets.length; i++) {
                if (currentUserRoom === allSockets[i]?.room) {
                    allSockets[i]?.socket.send(parsedMessage.payload.message)
                }
            }
        }       
})

})



