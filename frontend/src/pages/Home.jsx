import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-[90vh] bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">

        <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          ✨ AI-Powered Resume Builder
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
          Build a Resume That
          <span className="text-blue-600"> Stands Out</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Create a professional resume with AI-powered suggestions,
          a live preview, and easy PDF export — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            to="/builder"
            className="bg-blue-600 text-white px-7 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Create My Resume →
          </Link>

          <Link
            to="/my-resumes"
            className="bg-white text-gray-700 border border-gray-300 px-7 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition duration-200 shadow-sm"
          >
            View My Resumes
          </Link>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-bold text-gray-800 mb-2">
              AI Suggestions
            </h3>
            <p className="text-sm text-gray-500">
              Improve your summary, projects, and experience descriptions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">👀</div>
            <h3 className="font-bold text-gray-800 mb-2">
              Live Preview
            </h3>
            <p className="text-sm text-gray-500">
              See your resume update instantly while you build it.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">📄</div>
            <h3 className="font-bold text-gray-800 mb-2">
              PDF Export
            </h3>
            <p className="text-sm text-gray-500">
              Easily save your completed resume as a PDF.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}

export default Home;