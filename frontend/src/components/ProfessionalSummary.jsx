import { useState } from "react";
import { improveSummary as improveSummaryAPI } from "../services/aiservice";

function ProfessionalSummary({ resume, setResume }) {
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setResume({
      ...resume,
      summary: e.target.value,
    });
  };

  const improveSummary = async () => {
    if (!resume.summary || resume.summary.trim() === "") {
      alert("Please write your summary first.");
      return;
    }

    setLoading(true);

    try {
      const improvedSummary = await improveSummaryAPI(resume.summary);

      setResume({
        ...resume,
        summary: improvedSummary,
      });
    } catch (error) {
      console.error("AI Error:", error);
      alert("Unable to improve summary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-7 rounded-2xl shadow-md border border-gray-100">

      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-xl">
            ✍️
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            Professional Summary
          </h2>
        </div>

        <p className="text-sm text-gray-500">
          Write a short introduction that highlights your skills, interests,
          and career goals.
        </p>
      </div>

      {/* Summary Input */}
      <textarea
        name="summary"
        value={resume.summary}
        onChange={handleChange}
        placeholder="Example: B.Tech student interested in software development, AI, and web technologies..."
        rows="7"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-3">

        <p className="text-sm text-gray-500">
          Keep your summary short, clear, and professional.
        </p>

        <span className="text-xs text-gray-400">
          {resume.summary.length} characters
        </span>

      </div>

      {/* AI Button */}
      <button
        type="button"
        onClick={improveSummary}
        disabled={loading}
        className="mt-5 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-sm disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? "✨ Improving..." : "✨ Improve with AI"}
      </button>

    </div>
  );
}

export default ProfessionalSummary;