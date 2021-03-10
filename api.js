const io = require("socket.io")();

const SOCKET_EVENT = "change";
const ROOM_NAMESPACE = "timers";

// data store
const timers = {};

const getTimer = (timerId) => timers[timerId];

const hasTimer = (timerId) => !!getTimer(timerId);

const createTimer = (timerId, endTime) => {
  const timer = {
    endTime,
  };

  timers[timerId] = timer;

  return timer;
};

const updateTimer = (timerId, endTime) => {
  const timer = getTimer(timerId);

  timer.endTime = endTime;

  return timer;
};

const deleteTimer = (timerId) => {
  delete timers[timerId];
};

// handlers
io.on("connection", function (socket) {
  const timerId = socket.handshake.query.timerId;
  const roomId = `${ROOM_NAMESPACE}/${timerId}`;

  socket.join(roomId);

  if (hasTimer(timerId)) {
    socket.emit(SOCKET_EVENT, getTimer(timerId));
  }

  socket.on(SOCKET_EVENT, (message) => {
    if (hasTimer(timerId)) {
      io.to(roomId).emit(SOCKET_EVENT, updateTimer(timerId, message.endTime));
    } else {
      io.to(roomId).emit(SOCKET_EVENT, createTimer(timerId, message.endTime));
    }
  });
});

io.of("/").adapter.on("delete-room", (roomId) => {
  if (roomId.startsWith(ROOM_NAMESPACE)) {
    const timerId = roomId.split("/")[1];
    deleteTimer(timerId);
  }
});

module.exports = io;
