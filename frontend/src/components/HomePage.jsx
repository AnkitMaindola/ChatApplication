import React from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";

function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items- gap-4 justify-center h-[550px] min-w-[550px]">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
}

export default HomePage;
