import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setotherUsers } from "../redux/userSlice";

function useGetOtherUsers() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOtherUser = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(`http://localhost:8000/api/v1/user`);
        dispatch(setotherUsers(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUser();
  }, []);
  //   return (
  //     <div>useGetOtherUsers</div>
  //   )
}

export default useGetOtherUsers;
