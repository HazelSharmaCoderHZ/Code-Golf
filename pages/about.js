import Link from 'next/link';


export default function About() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-blue-600 via-purple-900 to-purple-700 text-white flex flex-col items-center justify-center overflow-hidden">
     <div className="bubble bg-cyan-300 border w-47 h-47 top-13 right-20 animate-[float1_8s_ease-in-out_infinite] hover:bg-pink-300"></div>
     <div className="bubble bg-pink-300 w-44 border h-44 top-94 left-30 animate-[float2_10s_ease-in-out_infinite] hover:bg-cyan-300"></div>
   

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-7">
        <h1 className="whitespace-nowrap text-6xl sm:text-6xl md:text-7xl font-bold mb-2 tracking-tight text-black">
          About <span className="text-cyan-100">WIE</span> .
        </h1>

        <article className="max-w-4xl bg-white/20 border border-black backdrop-blur-md text-lg leading-relaxed text-purple-200 bg-opacity-90 rounded-xl p-10 shadow-xl hover:text-blue-200 hover:border-blue-200">
          <p>
            IEEE Women in Engineering (WIE) is not just a club, but a family of skillful individuals. Our main aim is to promote women in tech,
            innovation and leadership. At VIT Vellore, our WIE team organizes inspiring events,
            workshops, and competitions to empower women in STEM and foster community.
          </p>
          <p className="mt-6">
            Join us to connect with passionate future engineers, enhance your skills, and contribute to
            a diverse, inclusive tech culture!
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
