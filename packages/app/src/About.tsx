import React, { useEffect, useState } from "react";
import DefaultScrollAnimation from "./DefaultScrollAnimation";

export default function About() {
  const [degree, setDegree] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      const about = document?.querySelector("#about") as HTMLElement | null;
      const minScrollTop = about ? about.offsetTop - window.innerHeight : 0;
      const maxScrollTop = about
        ? about.offsetTop + about.offsetHeight
        : document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction =
        (scrollTop - minScrollTop) / (maxScrollTop - minScrollTop);
      const ratio = Math.min(Math.max(scrollFraction, 0), 1);

      setDegree(ratio * 360 * 10);
    });
  }, []);

  return (
    <section id="about">
      <div className="flex justify-center items-center py-16 min-h-screen px-8">
        <div className="flex flex-col justify-center items-center w-full">
          <DefaultScrollAnimation>
            <div className="flex-1 font-bold mb-8">
              <span>About </span>
              <span className="text-green-500">록셉</span>
            </div>
          </DefaultScrollAnimation>
          <div className="flex flex-col md:flex-row my-8 w-full">
            <div className="flex-1 p-4 flex justify-center items-center">
              <DefaultScrollAnimation delay={250}>
                <img
                  className="ring-2 ring-green-100 ring-opacity-10 rounded-full"
                  style={{ transform: `rotate(${degree}deg)` }}
                  src="/lockcept.png"
                  alt="lockcept"
                />
              </DefaultScrollAnimation>
            </div>
            <div
              className="flex flex-[2_2_0%] p-4 text-left text-sm md:text-lg justify-center items-center"
              style={{ wordBreak: "keep-all" }}
            >
              <DefaultScrollAnimation delay={500}>
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
              </DefaultScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
