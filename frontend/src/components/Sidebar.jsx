import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from "./OtherUsers";

function Sidebar() {
  return (
    <div>
      <form className="flex gap-2 ">
        <input
          type="text"
          className="input input-bordered rounded-md"
          placeholder="Search..."
        />
        <button className="btn">
          <BiSearchAlt2 className="w-6 h-6 outline-none" />
        </button>
      </form>
      <div className="divider"></div>
      <OtherUsers />
      <button className="btn btn-sm flex justify-start mt-2">Logout</button>
    </div>
  );
}

export default Sidebar;
