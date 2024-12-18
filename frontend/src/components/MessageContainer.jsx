import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useSelector } from "react-redux";

function MessageContainer() {
  const {selectedUser} = useSelector(store => store.user)
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <div className="flex gap-3 bg-zinc-800 text-white cursor-pointer items-center p-3">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={selectedUser?.profilePhoto} />
          </div>
        </div>
        <div>
          <p>{selectedUser?.username}</p>
        </div>
        <div className="divider"></div>
      </div>
      <Messages/>
      <SendInput/>

    </div>
  );
}

export default MessageContainer;
