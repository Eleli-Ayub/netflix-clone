import React, { useCallback, useEffect, useState } from "react";
import Power from "../public/assets/images/homemovies/avengers.jpg";
import Image from "next/image";
import { BsFillPlayFill, BsPlusLg } from "react-icons/bs";
import { clearInterval } from "timers";

const Homepage = () => {
  const [index, setIndex] = useState(0);

  const movies = [
    {
      name: "Avengers Endgame",
      year: "2019",
      desc: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      imageUrl: "../public/assets/images/homemovies/avengers.jpg",
    },
    {
      name: "Top Gun Maverick",
      year: "2022",
      desc: 'After more than 30 years of service as one of the Navy\'s top aviators, Pete "Maverick" Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. Training a detachment of graduates for a special assignment, Maverick must confront the ghosts of his past and his deepest fears, culminating in a mission that demands the ultimate sacrifice from those who choose to fly it.',
      imageUrl: "../public/assets/images/homemovies/topgun.jpeg",
    },
    {
      name: "The Matrix",
      year: "1999",
      desc: "Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      imageUrl: "../public/assets/images/homemovies/matrix.jpg",
    },
    {
      name: "Power: Ghost",
      year: "2019",
      desc: "A sequel to the series \"Power.\" On his own for the first time, Tariq St. Patrick Tariq navigates his new life, in which his desire to shed his father's legacy comes up against the mounting pressure to save his family. Along the way, Tariq gets entangled in the affairs of the cutthroat Tejada family, adding further complications as he tries to balance his drug operations with his education, love life, family affairs, and mounting pressure from Cooper Saxe. He divides his time between school and hustling to pay for his mother's defense attorney, but when he runs out of options, Tariq turns to a familiar drug game.",
      imageUrl: "../public/assets/images/homemovies/power.webp",
    },
    {
      name: "Edge of Tommorrow",
      year: "2019",
      desc: "With the help of warrior Rita Vrataski, Major William Cage has to save Earth and the human race from an alien species, after being caught in a time loop.",
      imageUrl: "../public/assets/images/homemovies/edge.jpeg",
    },
    {
      name: "Power",
      year: "2019",
      desc: 'It appears James "Ghost" St. Patrick has it all -- a drop-dead gorgeous wife, a stunning Manhattan penthouse, and the power and success that come with owning hot new nightclub Truth. But a closer look reveals a man living a double life.',
      imageUrl: "../public/assets/images/homemovies/powe1.webp",
    },
  ];

  setInterval(() => {
    setIndex((prevIndex) =>
      prevIndex < movies.length - 1 ? prevIndex + 1 : 1
    );
  }, 5000);
  return (
    <div className="">
      <div className={`relative h-screen w-screen overflow-hidden`}>
        <Image
          height={1240}
          width={1240}
          className="main-image h-full w-full object-cover transform duration-1000"
          src={"/" + movies[index].imageUrl}
          alt={movies[index].name}
        />
        <div className="main-text absolute h-full w-full top-0 left-0 bg-black/50 flex items-end justify-start px-40 py-40">
          <section className=" text-white flex flex-col gap-3 font-bold max-w-[50%]">
            <p className="text-6xl  font-bold">{movies[index].name}</p>
            <p className="text-3xl text-gray-400">{movies[index].year}</p>
            <p className="text-xl text-red-400">
              Match: <span>95%</span>
            </p>
            <button className="px-20 bg-red-400 max-w-sm text-black/60 py-2 rounded text-xl">
              Trailer
            </button>
            <p className="font-normal">{movies[index].desc}</p>
            <div className="flex">
              <button className="text-xl bg-gray-800 mr-5 rounded-xl px-5 py-2 flex items-center gap-2">
                More Info
              </button>
              <button className="text-xl bg-red-500 mr-5 rounded-xl px-5 py-2 flex items-center gap-2">
                Play <BsFillPlayFill className="text-black/50 text-2xl" />
              </button>
              <div className="border rounded-full flex items-center justify-center p-3 h-fit">
                <BsPlusLg className=" text-white text-xl" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
