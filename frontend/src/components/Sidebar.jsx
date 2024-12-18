import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux";
import { setotherUsers } from "../redux/userSlice";

function Sidebar() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const {otherUsers} = useSelector((store)=> store.user)

  const searchSubmitHandler = (e)=>{
    e.preventDefault();
const conversationUser = otherUsers?.find((user)=> user?.username.toLowerCase().includes(search.toLowerCase()) )
if(conversationUser){
  dispatch(setotherUsers([conversationUser]))
}
else{
  toast.error("no user found")
}

  }
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
      <form className="flex gap-2 " onSubmit={searchSubmitHandler}>
        <input
          type="text"
          value = {search}
          onChange={(e)=> setSearch(e.target.value)}
          className="input input-bordered rounded-md"
          placeholder="Search..."

        />
        <button className="btn" type="submit">
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
