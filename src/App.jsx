import { useState } from "react";
import ChatBody from "./components/ChatBody";
import ChatInput from "./components/ChatInput";
import { useMutation } from "react-query";
import { fetchResponse } from "./api";
function App() {
  const [chat, setChat] = useState([]);
  const [active, setActive] = useState(true);
  const [value, setValue] = useState();

  const mutation = useMutation({
    mutationFn: () => {
      return fetchResponse(chat);
    },
    onSuccess: (data) =>
      setChat((prev) => [
        ...prev,
        { sender: "ai", message: data.message.replace(/^\n\n/, "") },
      ]),
  });

  const sendMessage = async (message) => {
    await Promise.resolve(setChat((prev) => [...prev, message]));
    mutation.mutate();
  };
  const handleActive = async (message) => {
    console.log("message",message)
    await setActive(message)
    await Promise.resolve(setActive((prev) => message));
  
    console.log("message",active)
  };
  /** dumy search **/
  const onClick = () => {
    setValue("Explain quantum computing in simple terms");
  };
  /**/

  return (
    <div className="bg-[#1A232E] h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between  align-middle">
      {/* gradients */}
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>

      {/* header */}
      <div className="uppercase font-bold  text-2xl text-center mb-3">
        Eugene AI doppelgänger
      </div>
      {/* dumy search */}
      {active ? (
        <div className="container w-50 mt-auto">
          <div class="md:flex items-start text-center gap-3.5">
            <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
              <h2 class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                Examples
              </h2>
              <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                <button
                  class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"
                  onClick={() => {
                    onClick();
                  }}
                >
                  "Explain quantum computing in simple terms" →
                </button>
                {/* <button class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">
               "Got any creative ideas for a 10 year old’s birthday?" →
             </button>
             <button class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">
               "How do I make an HTTP request in Javascript?" →
             </button> */}
              </ul>
            </div>
            <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
              <h2 class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  ></path>
                </svg>
                Capabilities
              </h2>
              <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                  Remembers what user said earlier in the conversation
                </li>
                {/* <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
               Allows user to provide follow-up corrections
             </li>
             <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
               Trained to decline inappropriate requests
             </li> */}
              </ul>
            </div>
            <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
              <h2 class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                Limitations
              </h2>
              <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                  May occasionally generate incorrect information
                </li>
                {/* <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
               May occasionally produce harmful instructions or biased content
             </li>
             <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
               Limited knowledge of world and events after 2021
             </li> */}
              </ul>
            </div>
          </div>
        </div>
      ) : null}

      {/*  */}
      {/* body */}
      <div
        className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center
      scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md
      "
      >
        <ChatBody chat={chat} />
      </div>

      {/* input */}
      <div className="w-full max-w-4xl min-w-[20rem] self-center">
        <ChatInput
          sendMessage={sendMessage}
          loading={mutation.isLoading}
          defaultSearch={value}
          setActive={setActive}
        />
      </div>
    </div>
  );
}

export default App;
