import React from "react";

import { IoSend } from "react-icons/io5";

function SendInput() {
  return (
    <div className="px-3 my-3">
      <form action="">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Send the message .."
            className="border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-600 text-white"
          />
           <button type="submit" className='absolute flex inset-y-0 end-0 items-center pr-4'>
                    <IoSend />
                </button> 
        </div>
      </form>
    </div>
  );
}

export default SendInput;
