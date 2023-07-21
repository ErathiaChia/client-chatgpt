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
    console.log("message", message);
    await setActive(message);
    await Promise.resolve(setActive((prev) => message));

    console.log("message", active);
  };
  /** dumy search **/
  const onClick = (value) => {
    setValue(value);
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
        <div className="w-full max-w-4xl min-w-[20rem] self-center">
          <div className="row mb-3">
            <div className="w-full max-w-4xl min-w-[20rem] self-center text-center">
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </div>
          </div>
          <div class="md:flex items-start text-center gap-3.5">
            <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
              <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                <button
                  class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"
                  onClick={() => {
                    onClick("Explain quantum computing in simple terms");
                  }}
                >
                  "Explain quantum computing in simple terms" →
                </button>
              </ul>
            </div>
            <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
              <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
              <button
                  class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"
                  onClick={() => {
                    onClick("Got any creative ideas for a 10 year old’s birthday?");
                  }}
                >
                  "Got any creative ideas for a 10 year old’s birthday?" →
                </button>
              </ul>
            </div>
            <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
              <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
              <button
                  class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"
                  onClick={() => {
                    onClick("How do I make an HTTP request in Javascript?");
                  }}
                >
                  "How do I make an HTTP request in Javascript?" →
                </button>
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
