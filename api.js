const io = require("socket.io")();
const { getTimer, createTimer, deleteTimer } = require("./store");

const SOCKET_EVENT = "change";
const ROOM_NAMESPACE = "timers";

io.on("connection", function (socket) {
  const timerId = socket.handshake.query.timerId;
  const roomId = `${ROOM_NAMESPACE}/${timerId}`;

  socket.join(roomId);

  if (getTimer(timerId)) {
    socket.emit(SOCKET_EVENT, getTimer(timerId));
  }

  socket.on(SOCKET_EVENT, (message) => {
    io.to(roomId).emit(SOCKET_EVENT, createTimer(timerId, message.endTime));
  });
});

io.of("/").adapter.on("delete-room", (roomId) => {
  if (roomId.startsWith(ROOM_NAMESPACE)) {
    // all clients have disconnected so delete timer
    const timerId = roomId.split("/")[1];
    deleteTimer(timerId);
  }
});

module.exports = io;
