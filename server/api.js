const io = require("socket.io")();
const { getTimer, createTimer, deleteTimer } = require("./db");
const { isValidTimerId, isValidTimestamp } = require("./validation");

const ROOM_NAMESPACE = "timers";
const CHANGE_EVENT = "timer-change";
const ERROR_EVENT = "timer-error";

io.on("connection", function (socket) {
  if (!isValidTimerId(socket.handshake.query.timerId)) {
    socket.emit(ERROR_EVENT);
    return;
  }

  const timerId = socket.handshake.query.timerId.toLowerCase();
  const roomId = `${ROOM_NAMESPACE}/${timerId}`;

  socket.join(roomId);

  if (getTimer(timerId)) {
    socket.emit(CHANGE_EVENT, getTimer(timerId));
  }

  socket.on(CHANGE_EVENT, (message) => {
    if (isValidTimestamp(message.endTime)) {
      io.to(roomId).emit(CHANGE_EVENT, createTimer(timerId, message.endTime));
    }
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
