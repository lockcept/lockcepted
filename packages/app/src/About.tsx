import React, { useEffect, useState } from "react";
import TransitionInView from "./TransitionInView";

export default function About() {
  const [degree, setDegree] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      const about = document?.querySelector("#about") as HTMLElement | null;
      if (!about) {
        setDegree(0);
        return;
      }
      const minScrollTop = about.offsetTop - window.innerHeight;
      const maxScrollTop = about.offsetTop + about.offsetHeight;
      const index = about.offsetTop;
      const scroll = Math.min(Math.max(scrollTop, minScrollTop), maxScrollTop);
      const ratio = (scroll - index) / (maxScrollTop - minScrollTop);

      setDegree(ratio * 360 * 10);
    });
  }, []);

  return (
    <section id="about">
      <div className="flex justify-center items-center py-16 min-h-screen px-8">
        <div className="flex flex-col justify-center items-center w-full">
          <TransitionInView>
            <div className="flex-1 font-bold mb-8">
              <span className="text-2xl md:text-4xl">About </span>
              <span className="text-green-500">록셉</span>
            </div>
          </TransitionInView>
          <div className="flex flex-col md:flex-row my-8 w-full">
            <div className="flex-1 p-4 flex justify-center items-center md:px-16 md:justify-end">
              <TransitionInView>
                <img
                  className="ring-2 ring-green-100 ring-opacity-10 rounded-full"
                  style={{ transform: `rotate(${degree}deg)` }}
                  src="/lockcept.png"
                  alt="lockcept"
                />
              </TransitionInView>
            </div>
            <div
              className="flex flex-1 p-4 text-left text-sm justify-center items-center md:px-16 md:text-lg md:justify-start"
              style={{ wordBreak: "keep-all" }}
            >
              <TransitionInView>
                <div>
                  닉네임은 '록셉' 입니다.
                  <br />
                  <br />
                  풀스택 개발자로 근무하였습니다.
                  <br />
                  <br />
                  나의 세계를 창조하고 싶다는 꿈이 있습니다! (ㅋㅋ)
                  <br />
                  <br />
                  문제 해결을 위한 끊임없는 고민을 중요시 합니다.
                  <br />
                  <br />
                  서울대학교 산업공학과 주전공, 컴퓨터공학부 복수전공을
                  이수하였습니다.
                  <br />
                  <br />
                  취미는 <a href="https://blog.lockcept.kr">블로그(클릭)</a>,
                  게임, 피아노, 운동, 프로그래밍 입니다. [2024]
                </div>
              </TransitionInView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
