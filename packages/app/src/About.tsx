import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="flex justify-center items-center py-16 min-h-screen bg-green-200 px-8">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex-1 font-bold mb-8">
            <span>About </span>
            <span className="text-green-500">록셉</span>
          </div>
          <div className="flex my-8 w-full">
            <div className="flex-1 p-4 flex justify-center">
              <img
                className="border-4 border-green-100"
                src="/lockcept.png"
                alt="lockcept"
              />
            </div>
            <div
              className="flex flex-1 p-4 text-center text-sm md:text-lg justify-center items-center"
              style={{ wordBreak: "keep-all" }}
            >
              <div>
                안녕하세요 <br /> 록셉입니다 <br /> 개발자입니다 <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
