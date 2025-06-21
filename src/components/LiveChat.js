import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    let i = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          message: makeRandomMessage(20),
        })
      );
    }, 500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages?.map((message, index) => (
          <ChatMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Nanita",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="w-full border border-gray-5 00 ml-2 p-2 flex space-x-2"
      >
        <input
          type="text"
          className="w-64"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100" onClick={() => {}}>
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChat;
