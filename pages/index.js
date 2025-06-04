'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="firstpageanim">
      <div className="relative h-screen w-screen flex items-start justify-center text-white overflow-hidden">

        {/* Top Navigation - aligned right */}
        <div className="absolute top-4 right-6 z-20">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-2 flex space-x-6 shadow-lg text-sm sm:text-base">
            <Link href="/about" className="hover:text-cyan-200 font-semibold transition duration-300">
              About WIE
            </Link>
            <Link href="/contact" className="hover:text-cyan-200 font-semibold transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row w-full max-w-7xl items-start justify-between px-6 sm:px-12 pt-20 md:pt-26">

          {/* Left Section: Heading + Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left md:w-1/2"
          >
            <p className="text-4xl sm:text-5xl font-extrabold text-white/80 mb-4 tracking-wide">
              IEEE WIE introduces
            </p>
            <h1 className="text-7xl sm:text-7xl md:text-7xl font-extrabold font-serif typewriter-loop bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Code Golf 🏌️‍♂️
            </h1>
            <p className="text-xl sm:text-2xl italic mt-4 text-white/80 font-semibold">
              Logic | Laughter | Learning
            </p>

            {/* Buttons right below heading */}
            <div className="mt-10 flex flex-col space-y-4 ">
              <Link href="/rules">
                <button className="w-55 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-xl text-center transition transform duration-300 hover:text-cyan-200 hover:scale-105">
                  📏 View Rules
                </button>
              </Link>
              <a
                href="https://your-google-form-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-55 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-xl text-center transition transform duration-300 hover:text-cyan-200 hover:scale-105">
                  ✅ Confirm Your Spot
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right Section: Empty for future animation or image */}
          <div className="hidden md:block md:w-1/2"></div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-4 text-center text-sm text-gray-200 w-full">
          Hosted by IEEE WIE Team, VIT Vellore
        </footer>
      </div>
    </div>
  );
}
