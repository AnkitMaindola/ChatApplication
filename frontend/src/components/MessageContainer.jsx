import React, { useEffect } from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

function MessageContainer() {
  const {selectedUser} = useSelector(store => store.user)
  const authUser = useSelector((state) => state.user.authUser);
  const dispatch = useDispatch()

  useEffect(()=> {
return ()=> dispatch(setSelectedUser(null))
  },[])



  return (
    <>
    {
    selectedUser ? (
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
    ) : (
     <div className="md:min-w-[450px] flex flex-col items-center justify-center">
      <h1 className="text-4xl text-white">Hi {authUser?.fullname}</h1> 
      <h1 className="text-2xl text-white">Let's start the conversation</h1>

     </div>
    )

    }
    </>

  );
}

export default MessageContainer;
