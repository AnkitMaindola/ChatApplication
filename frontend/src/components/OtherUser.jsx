import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

function OtherUser(props) {
  const user = props.user;
  const dispatch = useDispatch()
  const {selectedUser} = useSelector(store => store.user)
function selectedUserHandler(user){
  dispatch(setSelectedUser(user))
}


  return (
    <div onClick={() => selectedUserHandler(user)}  className={`${selectedUser?._id === user?._id ? 'bg-zinc-200' : ''} flex gap-3 hover:bg-zinc-200 cursor-pointer items-center p-3`}>
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
