# Socket Chat

This is a basic server-client chat made with [Socket.io](https://socket.io/) and TypeScript

## Installation

> **Note**
> I use `pnpm` in these examples. `NPM` will also work if you don't have or want to install `pnpm`

Clone the repository:

```sh
git clone https://github.com/Glowstudent777/Socket-Chat-TS.git
```

Install dependencies:

```sh
pnpm install
```

## Usage

### Starting the Server

```sh
server.sh
```

### Using a Client

You can have as many clients open as you like on your device at once. To open a new client window just run the following command:

```sh
client.sh
```
Enter your username and hit <kbd>Enter</kbd>

| Command | Function            | Usage         |
| ------- | ------------------- | ------------- |
| b;      | Sends a message     | b; \<message> |
| ls;     | Shows users in chat | ls;           |
| q;      | Exits chat          | q;            |
