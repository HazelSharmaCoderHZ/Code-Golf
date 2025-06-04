import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-700 to-black text-white px-8 py-16 flex flex-col items-center">
      <h1 className="text-6xl font-extrabold mb-8 tracking-tight text-center">
        About <span className="text-purple-400">WIE</span>
      </h1>

      <article className="max-w-4xl text-lg leading-relaxed text-purple-200 bg-black bg-opacity-50 rounded-xl p-10 shadow-lg">
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
        <button className="mt-12 bg-purple-600 hover:bg-purple-800 text-white font-semibold px-10 py-3 rounded-full text-xl shadow-lg transition-colors duration-300">
          ← Back to Home
        </button>
      </Link>
    </main>
  )
}
