import Link from 'next/link'

export default function Rules() {
  return (
    <main className="min-h-screen bg-white p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Code Golf Rules 📏</h1>
      <ul className="list-disc max-w-2xl mx-auto space-y-4 text-left text-lg">
        <li><strong>Objective:</strong> Solve problems using the shortest code possible.</li>
        <li><strong>Tools:</strong> You may use any programming language.</li>
        <li><strong>Evaluation:</strong> Shorter code with correct output wins. Creativity counts!</li>
        <li><strong>Originality:</strong> Code must be your own. No plagiarism allowed.</li>
        <li><strong>Submission:</strong> Submit your code through the Google Form by the deadline.</li>
        <li><strong>Judgment:</strong> Decisions by the organizers will be final.</li>
      </ul>

      <div className="text-center mt-10">
        <Link href="/">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">← Back to Home</button>
        </Link>
      </div>
    </main>
  )
}
