import Image from "next/image";
import { useState } from "react";

export default function Chat() {
  const [currentTask, setTask] = useState(1);
  const chatlist = [
    { message: "hello", sender: "user", time: "12:00" },
    { message: "hi", sender: "bot", time: "12:01" },
  ];
  return (
    <div className="h-[100vh] p-4">
      <div className="h-full overflow-hidden transition-all dark:border-neutral-200 border rounded-md shadow-md flex flex-row">
        <div className="w-[260px] min-w-[260px] pt-4 border flex flex-col items-center justify-between">
          <div className="mt-2 w-full flex flex-col items-center flex-1">
            {["task1", "task2"].map((i, idx) => (
              <div
                className="px-4 py-2 rounded-md w-[90%] flex items-center justify-between border mb-4 cursor-pointer"
                style={{
                  backgroundColor: idx === currentTask ? "#f5f5f5" : "",
                  border: idx === currentTask ? "1px solid #18a058" : "",
                }}
                onClick={() => setTask(idx)}
                key={i}
              >
                <span>{i}</span>
                <div className="flex gap-2">
                  <svg
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.414 15.89L16.556 5.748l-1.414-1.414L5 14.476v1.414zm.829 2H3v-4.243L14.435 2.212a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414zM3 19.89h18v2H3z"
                    ></path>
                  </svg>
                  <svg
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm1 2H6v12h12zm-9 3h2v6H9zm4 0h2v6h-2zM9 4v2h6V4z"
                    ></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <footer className="h-[88px] border-t w-full flex items-center px-2">
            <div className="w-12 h-12 rounded-full bg-[aqua] flex items-center justify-center text-white mr-2"></div>
            <div className="flex flex-col">
              <span className="text-[14px]">username: </span>
              <span className="text-[14px]">balance: </span>
            </div>
          </footer>
        </div>

        {/* content */}
        <div className="flex flex-col justify-between w-full">
          <div className="p-4 flex flex-col gap-2 w-full flex-1 overflow-x-auto">
            {chatlist.map((chat, index) => (
              <div
                key={index}
                className={`flex justify-between w-full items-end flex-row-reverse ${
                  chat.sender === "bot" ? "" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`flex gap-2 w-full ${
                    chat.sender === "bot" ? "" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-[aqua] flex items-center justify-center text-white mr-2">
                    {chat.sender}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[#b4bbc4] text-left">
                      {chat.time}
                    </span>
                    <div className="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#f4f6f8]">
                      <div className="leading-relaxed break-words">
                        <div className="markdown-body">
                          <span>{chat.message}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="h-[88px] w-full p-4 flex flex-row items-center justify-between">
            <textarea
              cols={30}
              rows={10}
              className="w-[90%] h-full border dark:border-neutral-200 focus:border-[#18a058] focus:outline-none p-2"
            />
            <button className="bg-[#a5ceaf] w-12 h-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634L21.044 2.32c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8l-8 6z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
