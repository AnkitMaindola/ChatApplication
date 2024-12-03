import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './components/HomePage';
import Signup from './components/SIgnup';
import Login from './components/Login';


function App() {

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
    <div className="App bg-gray-200 h-screen ">
      <RouterProvider router={router}/>

{/* <button className="btn btn-active btn-ghost">Ghost</button> */}
    </div>
  );
}

export default App;
