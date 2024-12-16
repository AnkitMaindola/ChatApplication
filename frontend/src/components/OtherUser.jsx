import React from "react";

function OtherUser(props) {
  const user = props.user
  return (
    <div className="flex gap-3 hover:bg-zinc-200 cursor-pointer items-center p-3">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src={user?.profilePhoto} />
        </div>
      </div>
      <div>
        <p>{user?.username}</p>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default OtherUser;
