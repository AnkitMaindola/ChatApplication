import React from "react";

function OtherUser() {
  return (
    <div className="flex gap-3 hover:bg-zinc-200 cursor-pointer items-center p-3">
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
  );
}

export default OtherUser;
