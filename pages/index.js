'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
const cyberVisual = "/cybervisual.json";



export default function Home() {
  return (
    
    <div className="firstpageanim">
      <div className="relative h-screen w-screen flex items-start justify-center text-white overflow-hidden">
        {/* Top Navigation - aligned right */}
       <div className="absolute top-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 z-20">
  <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-2 flex flex-nowrap justify-center sm:justify-end gap-x-4 shadow-lg text-sm sm:text-base w-full sm:w-auto overflow-x-auto">
    <Link href="/about" className="hover:text-cyan-200 font-semibold hover:scale-105 transition duration-300">
      About WIE
    </Link>
    <Link href="/contact" className="hover:text-cyan-200 font-semibold hover:scale-105 transition duration-300">
      Contact Us
    </Link>
    <Link href="/contest" className="hover:text-cyan-200 font-semibold  hover:scale-105 transition duration-300">
      Contest
    </Link>
    <Link href="/winner" className="hover:text-cyan-200 font-semibold  hover:scale-105 transition duration-300">
      Winners
    </Link>
  </div>
</div>


        {/* Main Content */}
        <div className="   flex flex-col md:flex-row w-full max-w-7xl items-start justify-between px-6 sm:px-12 pt-20 md:pt-26">

          {/* Left Section: Heading + Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left w-full md:w-1/2"
          >
            <motion.p
             initial={{ y: -50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 1 }}
             className="text-4xl   text-white/80 bg-clip-text sm:text-5xl font-extrabold  mb-4 tracking-wide"
            >
          IEEE WIE introduces
          </motion.p>

        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-7xl sm:text-7xl md:text-7xl font-extrabold font-serif typewriter-loop bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
        >
        Code Golf 🏌️‍♂️
        </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-xl sm:text-2xl italic mt-4 text-white/80 font-semibold"
      >
        Logic | Laughter | Learning
      </motion.p>


            {/* Buttons right below heading */}
            <div className="mt-10 mb-1 flex flex-col space-y-4 ">
              <Link href="/rules">
                <button className="w-55 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-xl text-center transition transform duration-300 hover:text-cyan-200 hover:scale-105">
                  📝 View Rules
                </button>
              </Link>
              <a
                href="https://forms.gle/fh3hFkrPoZeNdKZK8"
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
          <div className="w-full md:w-1/2 flex justify-center md:mt-0 mb-34 sm:mb-18">
           <Lottie
             loop={true}
             className="w-[80%] max-w-[500px] drop-shadow-2xl"
             path={cyberVisual}
             autoplay={true}
          />
          </div>
        </div>

        {/* Footer */}
        <footer className="hidden lg:block absolute bottom-4 text-center text-sm text-gray-200 pt-20 w-full">
          Hosted by IEEE WIE Team, VIT Vellore
        </footer>
      </div>
    </div>
  );
}
