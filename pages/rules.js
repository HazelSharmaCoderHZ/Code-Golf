import Link from 'next/link';



export default function Rules() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 to-blue-800 text-white p-6 flex flex-col">
     <h1 className="text-5xl font-bold mt-7 mb-5 text-center hover:text-green-100">Code Golf Rules 📝</h1>

      <div className="flex flex-col items-center gap-6">
      {/* Rule Card */}
        <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-xl w-full max-w-3xl hover:border-white transition transform hover:scale-105 shadow-md">
        <span className="inline-block mb-2 px-3 py-1 rounded-full bg-green-600 text-white font-semibold">🎯 Register on VTOP</span>
        <p className="text-white">Any participant whose entry is not recieved on VTOP, shall not be eligible to participate. 🚀 <a href="https://vtop.vit.ac.in/" target="_blank" rel="noopener noreferrer" className="underline text-center text-purple-300 hover:text-purple-500 ml-4"> Register on VTOP</a>
       </p>
        </div>

        <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-xl w-full max-w-3xl hover:border-white transition transform hover:scale-105 shadow-md">
        <span className="inline-block mb-2 px-3 py-1 rounded-full bg-pink-600 text-white font-semibold">🛠️ Language</span>
        <p className="text-white">You may use only PYTHON language to solve the question.</p>
        </div>

        <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-xl w-full max-w-3xl hover:border-white transition transform hover:scale-105 shadow-md">
        <span className="inline-block mb-2 px-3 py-1 rounded-full bg-yellow-900 text-white font-semibold">🎯 Objective</span>
        <p className="text-white">Solve problems using the shortest code possible. Participants will be provided 3 questions of varied difficulty levels.</p>
        </div>

        <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-xl w-full max-w-3xl hover:border-white  transition transform hover:scale-105 shadow-md">
        <span className="inline-block mb-2 px-3 py-1 rounded-full bg-green-600 text-white font-semibold">🧠Evaluation</span>
        <p className="text-white">Shorter code with correct output wins. Creativity counts!</p>
        </div>

        <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-xl w-full max-w-3xl hover:border-white transition transform hover:scale-105 shadow-md">
        <span className="inline-block mb-2 px-3 py-1 rounded-full bg-black text-white font-semibold">🚫 Originality</span>
        <p className="text-white">Code must be your own. No plagiarism allowed.</p>
        </div>

        <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-xl w-full max-w-3xl hover:border-white transition transform hover:scale-105 shadow-md">
        <span className="inline-block mb-2 px-3 py-1 rounded-full bg-pink-600 text-white font-semibold">⚖️ Judgement</span>
        <p className="text-white">Decisions by the organizers will be final.</p>
        </div>

       

      
      </div>

      <div className="text-center mt-12">
      <Link href="/">
       <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
        ← Back to Home
       </button>
       </Link>
      </div>

      <div className="h-12" /> {/* spacer */}
    </main>

  );
}
