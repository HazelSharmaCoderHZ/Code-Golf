'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Winner() {
  const winnerNames = ['Srilekha Sridha', 'Shresti Subahar', 'Pavni Arora'];
  const [flippedCards, setFlippedCards] = useState([false, false, false]);

  const toggleFlip = (index) => {

    const newFlipped = [...flippedCards];
    newFlipped[index] = !newFlipped[index];
    setFlippedCards(newFlipped);
  };

  return (
    <div className="pageanim min-h-screen px-6 py-12 bg-gradient-to-br from-gray-900 to-black text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Winners of Code Golf - IEEE WIE
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {[1, 2, 3].map((rank, index) => (
          <div
            key={index}
            className="relative h-96 w-72 [perspective:1000px] cursor-pointer"
            onClick={() => toggleFlip(index)}
          >
            <div
              className={`absolute duration-1000 w-full h-full [transform-style:preserve-3d] ${
                flippedCards[index] ? 'rotate-x-180' : ''
              }`}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 p-6 text-white [backface-visibility:hidden]">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start">
                    <div className="text-5xl font-bold">
                      {rank === 1 ? 'First' : rank === 2 ? 'Second' : 'Third'}
                    </div>
                    <div className="text-5xl">🌟</div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xl">Winner</p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-sm opacity-75">Tap to flip!</p>
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 p-6 text-white rotate-x-180 [backface-visibility:hidden]">
                <div className="flex flex-col h-full">
                  <div className="text-2xl font-bold mb-4">
                    {rank === 1 ? 'First' : rank === 2 ? 'Second' : 'Third'} Winner
                  </div>
                  <div className="flex-grow">
                    <p className="text-lg">{winnerNames[index]}</p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <button className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                      Congratulations!✨
                    </button>
                    <span className="text-3xl">🎉</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
