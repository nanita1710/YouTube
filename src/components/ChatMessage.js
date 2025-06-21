import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex py-3 items-center space-x-2 shadow-sm p-1">
      <img
        className="h-6 rounded-full"
        alt="name"
        src="https://yt4.ggpht.com/ytc/AIdro_m5haELUg_NVNei9yPs334ar0tHeqoxdOyQwV17SEoZVwQwchwNuznoIBlsVGQpH9xupQ=s64-c-k-c0x00ffffff-no-rj"
      />
      <span className="font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
