import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

export default function App() {
  const [msg, setMsg] = useState("");
  const [serverMsg, setServerMsg] = useState("");
  const [room, setRoom] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", {
      message: msg,
      room: room,
    });
  };

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setServerMsg(data);
    });
  }, []);

  return (
    <>
      <div>
        <input onChange={(e) => setRoom(e.target.value)} type='text' placeholder='Room code...' />
        <button onClick={joinRoom}>Join room</button>

        <input
          onChange={(e) => setMsg(e.target.value)}
          type='text'
          placeholder='Enter message...'
        />
        <button onClick={sendMessage}>Send message</button>

        <h1>{serverMsg ? serverMsg.message : null}</h1>
      </div>
    </>
  );
}
