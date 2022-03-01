import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

export default function Header() {
  const [isShowing, setIsShowing] = useState(true);
  const resetIsShowing = () => setTimeout(() => setIsShowing(true), 500);

  return (
    <header>
      <div className="flex justify-center items-center py-16 min-h-screen">
        <div className="w-64 h-32 mr-16">
          <Transition
            as={Fragment}
            appear={true}
            show={isShowing}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 rotate-[-120deg] scale-[1.5]"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95 "
          >
            <div className="w-full h-full bg-green-300 rounded-md shadow-lg flex justify-center items-center">
              <div className="text-green-700 text-3xl">lockcept</div>
            </div>
          </Transition>
        </div>

        <button
          onClick={() => {
            setIsShowing(false);
            resetIsShowing();
          }}
          className="flex items-center px-3 py-2 mt-8 text-sm font-medium text-white transition transform bg-black rounded-full backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
        >
          <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 opacity-100">
            <path
              d="M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C15.5333 5.63385 15.9922 6.29475 16.3266 7M16.9497 2L17 7H16.3266M12 7L16.3266 7"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>

          <span className="ml-3">Click</span>
        </button>
      </div>
    </header>
  );
}
