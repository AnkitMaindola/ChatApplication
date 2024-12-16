import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast"

function Sidebar() {
  const navigate = useNavigate()
  const logoutHandler = async ()=>{
    try {
      const res = axios.get(`http://localhost:8000/api/v1/user/logout`);
      navigate("/login")
      toast.success("Logout successfully")

    } catch (error) {
      console.log(error);
      
    }
  }
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
      <button className="btn btn-sm flex justify-start mt-2" onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default Sidebar;
