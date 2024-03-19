const app = require("express") ();
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    //console.log("connection", socket)

    socket.emit("chat", "hi there")

    socket.on("chat", (arg) => {
        console.log("incoming chat", arg);
        io.emit("chat", arg);
    })
})

app.get("/test", (req, res) => {

    res.send("<h1>socket</h1>")
})

server.listen(3000);