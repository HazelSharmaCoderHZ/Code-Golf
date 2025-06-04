import Link from 'next/link'

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-700 to-black text-white px-8 py-16 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold mb-9 tracking-tight text-center">
        Contact <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 text-transparent bg-clip-text">Us</span>
      </h1>

      <div className="max-w-4xl text-lg leading-relaxed text-purple-200 bg-black bg-opacity-50 rounded-xl p-10 shadow-lg space-y-6">
        <p>
          📧 Email us at{' '}
          <a href="mailto:wieclub@vit.ac.in" className="underline text-purple-300 hover:text-purple-500">
            wieclub@vit.ac.in
          </a>
        </p>

        <p>Feel free to reach out for any queries!</p>
      </div>

      <Link href="/">
        <button className="mt-9 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:bg-purple-800 text-white font-semibold px-10 py-3 rounded-full text-xl shadow-lg transition-colors duration-300">
          ← Back to Home
        </button>
      </Link>
    </main>
  )
}
