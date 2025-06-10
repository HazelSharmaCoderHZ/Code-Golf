import Link from 'next/link'

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-600 to-blue-900 text-white px-8 py-16 flex flex-col items-center justify-center">
      <div className="bubble bg-cyan-300 border w-47 h-47 top-8 right-2 animate-[float1_8s_ease-in-out_infinite] hover:bg-pink-300"></div>
      <div className="bubble bg-pink-300 w-44 border h-44 top-85 left-10 animate-[float2_10s_ease-in-out_infinite] hover:bg-cyan-300"></div>
   
      <h1 className="text-7xl font-bold mb-9 tracking-tight text-center">
        Contact <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 text-transparent bg-clip-text">Us</span>.
      </h1>

      <div className="max-w-4xl text-lg leading-relaxed text-purple-200 bg-black bg-opacity-80 border border-white rounded-xl p-10 shadow-xl hover:border-pink-300 hover:translate-y-1 hover:scale-105 duration-300 space-y-6">
        <p className="text-white text-center">
  💌 Reach us at:<br></br><br></br>{' '}
         <a href="mailto:ieeewie@vit.ac.in" className="underline text-purple-300 text-center hover:text-purple-500 mr-4">📧 Email</a>
        <br></br>
        <a href="https://www.linkedin.com/company/ieee-women-in-engineering-vit" target="_blank" rel="noopener noreferrer" className="underline text-center text-purple-300 hover:text-purple-500 mx-4">🔗 LinkedIn</a><br></br>
         
        <a href="https://youtube.com/channel/UChyNPnb-Eg_DyTzOGs6nITw" target="_blank" rel="noopener noreferrer" className="underline text-center text-purple-300 hover:text-purple-500 mx-4">⭕ YouTube</a>
      <br></br>
        <a href="https://instagram.com/ieee_wie_vit" target="_blank" rel="noopener noreferrer" className="underline text-center text-purple-300 hover:text-purple-500 ml-4">🚀 Instagram</a>
        </p>


        <p className="text-center">Feel free to reach out for any queries!</p>
      </div>

      <Link href="/">
        <button className="mt-9 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:bg-purple-800 hover:text-black text-white font-semibold px-10 py-3 rounded-full text-xl shadow-lg transition-colors duration-300">
          ← Back to Home
        </button>
      </Link>
      
    </main>
  )
}
