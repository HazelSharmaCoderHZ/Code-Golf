'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const targetDate = new Date('2025-06-13T21:00:00+05:30');

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft('Contest has started!');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer(); // initial call
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <p className="heading">Code Golf</p>
        <p className="text-2xl">Powered By</p>
        <p className="heading">IEEE WIE</p>
        <a
        href="https://www.hackerrank.com/contests/code-golf-1749155413/challenges/palindromes">
                <p className="transition transform duration-300 hover:text-cyan-200 hover:scale-155">
                  Start Event
                </p>
        </a>
      </div>
      <p className="timer font-bold ">⏳ Contest starts in: <span className="text-purple-400">{timeLeft}</span></p>
      <p className="text-1xl">Back to <Link href="/" className="text-purple-400 hover:text-cyan-300 hover:scale-105">Home Page</Link></p>
    </div>
  );
}
