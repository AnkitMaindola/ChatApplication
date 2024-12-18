import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

function Message({message}) {
  const scroll = useRef();
  const authUser = useSelector((state) => state.user.authUser);
  const {selectedUser} = useSelector((state => state.user))
  useEffect(()=>{
scroll.current?.scrollIntoView({behavior : "smooth"})
  },[message])

  return ( 
    <div ref = {scroll}>
        {/* <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
</div> */}
<div className={`chat ${authUser?.id === message?.senderId ? 'chat-end' : 'chat-start'} `}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={`${authUser?.id === message?.senderId ? authUser?.profilePhoto : selectedUser?.profilePhoto}`} />
    </div>
  </div>
  <div className="chat-bubble">{message?.message}</div>
</div>
{/* <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-bubble">Not leave it in Darkness</div>
</div> */}
    </div>
  )
}

export default Message