import React from "react";
import TransitionInView from "./TransitionInView";

type GAME_ITEM = { title: string; img: string; href: string };

const games: GAME_ITEM[] = [
  {
    title: "리그오브레전드 솔로랭크 다이아",
    img: "tft.png",
    href: "https://www.op.gg/summoners/kr/%EB%A1%9D%20%EC%85%89",
  },
  {
    title: "전략적 팀 전투 챌린저",
    img: "tft.png",
    href: "https://lolchess.gg/profile/kr/%EB%A1%9D%EC%85%89",
  },
  {
    title: "메이플스토리",
    img: "maple.png",
    href: "https://maple.gg/u/%EB%A1%9D%EC%85%89",
  },
  {
    title: "각종 스팀 게임",
    img: "steam.jpg",
    href: "https://steamcommunity.com/id/lockcept/",
  },
];

const gameGrid = (game: GAME_ITEM, idx: number) => {
  const swap = idx % 2 === 0;
  const text = (
    <div className="flex px-4 mx-auto items-center">
      <div className="text-2xl font-bold text-gray-700">{game.title}</div>
    </div>
  );
  const image = (
    <div>
      <a href={game.href}>
        <img
          className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
          src={game.img}
          alt={game.title}
        />
      </a>
    </div>
  );
  return (
    <TransitionInView
      key={game.title}
      enterFrom="opacity-0 scale-50"
      enterTo="opacity-100 scale-100"
    >
      <div className="flex md:hidden py-8 mx-auto w-full px-8 flex-col gap-6">
        {text}
        {image}
      </div>
      <div className="hidden md:grid my-16 mx-auto w-full max-w-7xl px-8 grid-cols-2 grid-flow-col-dense gap-24">
        {swap && text}
        {image}
        {!swap && text}
      </div>
    </TransitionInView>
  );
};

export default function Gamer() {
  return (
    <section id="gamer">
      <div className="flex justify-center items-center py-16 min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <TransitionInView>
            <div className="font-bold flex-1 mt-6 mb-6 md:mb-16">
              <span className="text-2xl md:text-4xl">게이머 </span>
              <span className="text-green-500">록셉</span>
            </div>
          </TransitionInView>
          <div className="flex-1 my-6">
            {games.map((game, idx) => gameGrid(game, idx))}
          </div>
        </div>
      </div>
    </section>
  );
}
