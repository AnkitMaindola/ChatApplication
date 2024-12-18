import React from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages'
import { useSelector } from 'react-redux'

function Messages() {
  useGetMessages()
  const {messages} = useSelector(store => store.message)
  const storeData = useSelector((store) => {
    console.log(store, "store"); // Log the entire store
    return store; // Return the whole store or a specific part if needed
  });

  
  return (
    <div
    className='overflow-auto flex-1'>
  {
    messages?.map((message)=>{
      return (
        <Message key = {message._id} message = {message} />

      )
    })
  }
        </div>
  )
}

export default Messages