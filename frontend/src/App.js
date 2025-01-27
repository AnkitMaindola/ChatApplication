import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './components/HomePage';
import Signup from './components/SIgnup';
import Login from './components/Login';
import "./index.css"; // Ensure the path is correct
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client"
import { setSocket } from './redux/socketSlice';
import { setOnlineUsers } from './redux/userSlice';



function App() {
  const {authUser} = useSelector((store)=> store.user);
  const {socket} = useSelector((store)=> store.socket);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(authUser){
      const socketio = io('http://localhost:8000',{
        query : {
          userId : authUser.id
        }
      })
      console.log(socketio,"socket xncsksdjnejkwnkjek");    
      dispatch(()=>setSocket(socketio))
      socketio.emit('getOnlineUsers',(onlineUser) => {
        console.log(onlineUser,"online user");
        dispatch(()=> setOnlineUsers(onlineUser))
      })
      return ()=> socketio.close();

    }
    else {
      if(socket){
        socket.close();
        dispatch(()=> setSocket(null))
      }
    }

  },[authUser])


  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/login",
      element:<Login/>
    }
  ])


  return (

  
    <div className="App  h-screen  bg-gray-400" >
      <RouterProvider router={router}/>

{/* <button className="btn btn-active btn-ghost">Ghost</button> */}
    </div>
  );
}

export default App;
