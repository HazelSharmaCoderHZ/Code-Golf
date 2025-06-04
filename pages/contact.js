import Link from 'next/link'

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-700 to-black text-white px-8 py-16 flex flex-col items-center">
      <h1 className="text-6xl font-extrabold mb-8 tracking-tight text-center">
        Contact <span className="text-purple-400">Us</span>
      </h1>

      <div className="max-w-4xl text-lg leading-relaxed text-purple-200 bg-black bg-opacity-50 rounded-xl p-10 shadow-lg space-y-6">
        <p>
          📧 Email us at{' '}
          <a href="mailto:wieclub@vit.ac.in" className="underline text-purple-300 hover:text-purple-500">
            wieclub@vit.ac.in
          </a>
        </p>

        <p>
          📸 Follow us on Instagram{' '}
          <a
            href="https://instagram.com/wievit"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-purple-300 hover:text-purple-500"
          >
            @wievit
          </a>
        </p>

        <p>Feel free to reach out for any queries or collaboration!</p>
      </div>

      <Link href="/">
        <button className="mt-12 bg-purple-600 hover:bg-purple-800 text-white font-semibold px-10 py-3 rounded-full text-xl shadow-lg transition-colors duration-300">
          ← Back to Home
        </button>
      </Link>
    </main>
  )
}
