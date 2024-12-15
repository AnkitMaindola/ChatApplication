import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";

function MessageContainer() {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <div className="flex gap-3 bg-zinc-800 text-white cursor-pointer items-center p-3">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg" />
          </div>
        </div>
        <div>
          <p>Ankit Maindola</p>
        </div>
        <div className="divider"></div>
      </div>
      <Messages/>
      <SendInput/>

    </div>
  );
}

export default MessageContainer;
