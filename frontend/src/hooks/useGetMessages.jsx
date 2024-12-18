import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setMessages } from "../redux/messageSlice";

function useGetMessages() {
    const dispatch = useDispatch()
  const { selectedUser } = useSelector(store => store.user);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:8000/api/v1/message/${selectedUser?._id ?  selectedUser?._id : '67433622a024cf9224f7ebb4'}`
        );
        dispatch(setMessages(res?.data))
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, [selectedUser]);
  //   return (
  //     <div>useGetMessages</div>
  //   )
}

export default useGetMessages;
