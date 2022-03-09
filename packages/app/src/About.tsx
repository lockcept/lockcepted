import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="flex justify-center items-center py-16 min-h-screen px-8">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex-1 font-bold mb-8">
            <span>About </span>
            <span className="text-green-500">록셉</span>
          </div>
          <div className="flex my-8 w-full">
            <div className="flex-1 p-4 flex justify-center items-center">
              <img
                className="ring-2 ring-green-100 ring-opacity-10 rounded-full"
                src="/lockcept.png"
                alt="lockcept"
              />
            </div>
            <div
              className="flex flex-[2_2_0%] p-4 text-left text-sm md:text-lg justify-center items-center"
              style={{ wordBreak: "keep-all" }}
            >
              <div>
                저는 록셉입니다.
                <br />
                <br />
                저는 풀스택 개발자입니다.
                <br />
                <br />
                저는 나만의 세계를 만들어 나가는 것을 좋아합니다.
                <br />
                <br />
                저는 항상 근거를 가지고 문제를 해결하려고 노력합니다.
                <br />
                <br />
                저는 서울대학교 산업공학과 주전공, 컴퓨터공학부 부전공을
                이수하였습니다.
                <br />
                <br />
                저는 게임을 좋아합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
