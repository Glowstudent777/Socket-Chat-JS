const io = require("socket.io-client");

const socket = io("http://localhost:3000");

var nickname = null;

console.log("Connecting to the server...");

socket.on("connect", () => {
    nickname = process.argv[2];

    socket.emit("join", { "sender": nickname, "action": "join" });
    console.log("[INFO]: Welcome %s", nickname);
});

socket.on("join", (data) => {
    console.log("[INFO]: %s has joined the chat", data.sender);
});

socket.on("disconnect", (reason) => {
    console.log("[INFO]: Client disconnected, reason: %s", reason);
    rl.close();
});

socket.on("list", (data) => {
    console.log("[INFO]: List of nicknames:");
    for (var i = 0; i < data.users.length; i++) {
        if (data.users[i] === nickname) console.log(`${data.users[i]} (You)`);
        else console.log(data.users[i]);
    }
});

socket.on("quit", (data) => {
    console.log("[INFO]: %s has left the chat", data.sender);
});

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input) => {
    if (input.startsWith("b;")) {
        var str = input.slice(2);
        socket.emit("broadcast", { "sender": nickname, "action": "broadcast", "msg": str });
    }
    else if ("ls;" === input) {
        socket.emit("list", { "sender": nickname, "action": "list" });
    }
    else if ("q;" === input) {
        socket.emit("quit", { "sender": nickname, "action": "quit" });
    }
});

socket.on("broadcast", (data) => {
    console.log("%s: %s", data.sender, data.msg);
});