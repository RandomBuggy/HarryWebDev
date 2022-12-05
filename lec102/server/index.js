const io = require("socket.io")(8010);

const users = {};

io.on("connection", socket => {
    socket.on("new-user-joined", name => {
        users[socket.id] = name;
        socket.broadcast.emit("user-joined", name);
    });

    socket.on("msg-send", message => {
        socket.broadcast.emit("msg-receive", {message: message, name: users[socket.id]});
    });

    socket.on("disconnect", message => {
        socket.broadcast.emit("msg-left", users[socket.id]);
        delete users[socket.id];
    });
});
