import Link from 'next/link';
import Lottie from 'lottie-react';

const hdr = "/header.json";

export default function About() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-blue-500 via-black to-purple-900 text-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Lottie
          loop={true}
          className="absolute inset-0  object-cover w-full h-full max-w-full drop-shadow-2xl"
          path={hdr}
          autoplay={true}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-7">
        <h1 className="text-7xl font-bold mb-2 tracking-tight text-black">
          About <span className="text-purple-900">WIE</span> .
        </h1>

        <article className="max-w-4xl bg-white/10 border border-black backdrop-blur-md text-lg leading-relaxed text-purple-200 bg-opacity-90 rounded-xl p-10 shadow-xl hover:text-blue-200 hover:border-blue-200">
          <p>
            IEEE Women in Engineering (WIE) is a global network dedicated to promoting women engineers’
            innovation and leadership. At VIT Vellore, our WIE team organizes inspiring events,
            workshops, and competitions to empower women in technology and foster community.
          </p>
          <p className="mt-6">
            Join us to connect with passionate engineers, enhance your skills, and contribute to
            a diverse, inclusive tech culture.
          </p>
        </article>

        <Link href="/">
          <button className="mt-5 bg-gradient-to-r from-cyan-400 backdrop-blur-md via-purple-400 to-pink-400 text-black  px-5 py-2 rounded-full text-lg shadow-lg transition-colors duration-300 border-black hover:text-white">
            ← Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
