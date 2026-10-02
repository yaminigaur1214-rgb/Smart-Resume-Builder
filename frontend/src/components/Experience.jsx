import { useState } from "react";
import { improveExperience } from "../services/aiservice";

function Experience({ resume, setResume }) {
  const [improvingExperience, setImprovingExperience] = useState(null);

  const handleImproveExperience = async (index) => {
    const description = resume.experience[index].description;

    if (!description || description.trim() === "") {
      alert("Please write an experience description first.");
      return;
    }

    setImprovingExperience(index);

    try {
      const improvedDescription = await improveExperience(description);

      const updatedExperience = [...resume.experience];

      updatedExperience[index] = {
        ...updatedExperience[index],
        description: improvedDescription,
      };

      setResume({
        ...resume,
        experience: updatedExperience,
      });
    } catch (error) {
      console.error("AI Experience Error:", error);
      alert("Unable to improve experience description.");
    } finally {
      setImprovingExperience(null);
    }
  };

  const addExperience = () => {
    setResume({
      ...resume,
      experience: [
        ...resume.experience,
        {
          jobTitle: "",
          company: "",
          duration: "",
          description: "",
        },
      ],
    });
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;

    const updatedExperience = [...resume.experience];

    updatedExperience[index][name] = value;

    setResume({
      ...resume,
      experience: updatedExperience,
    });
  };

  const removeExperience = (index) => {
    const updatedExperience = resume.experience.filter(
      (_, i) => i !== index
    );

    setResume({
      ...resume,
      experience: updatedExperience,
    });
  };

  return (
    <div className="bg-white p-6 md:p-7 rounded-2xl shadow-md border border-gray-100">

      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl">
            💼
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            Experience
          </h2>
        </div>

        <p className="text-sm text-gray-500">
          Add internships, jobs, training, or other relevant professional experience.
        </p>
      </div>

      {/* Experience Entries */}
      <div className="space-y-5">

        {resume.experience.map((experience, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-5 bg-gray-50"
          >

            {/* Experience Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-5">

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <h3 className="font-semibold text-gray-800">
                  Experience {index + 1}
                </h3>
              </div>

              {resume.experience.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeExperience(index)}
                  className="text-red-500 border border-red-200 bg-red-50 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-red-100 hover:text-red-700 transition"
                >
                  🗑 Remove
                </button>
              )}

            </div>

            <div className="space-y-5">

              {/* Job Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Title / Position
                </label>

                <input
                  type="text"
                  name="jobTitle"
                  value={experience.jobTitle}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="e.g. Python Development Intern"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>

                <input
                  type="text"
                  name="company"
                  value={experience.company}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="e.g. Tech Solutions Pvt. Ltd."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                />
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Duration
                </label>

                <input
                  type="text"
                  name="duration"
                  value={experience.duration}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="e.g. June 2026 - August 2026"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Responsibilities & Achievements
                </label>

                <textarea
                  name="description"
                  value={experience.description}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Describe your responsibilities, contributions, and achievements..."
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                />

                {/* AI Button */}
                <button
                  type="button"
                  onClick={() => handleImproveExperience(index)}
                  disabled={improvingExperience === index}
                  className="mt-3 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-sm disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {improvingExperience === index
                    ? "✨ Improving..."
                    : "✨ Improve with AI"}
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Add Experience */}
      <button
        type="button"
        onClick={addExperience}
        className="mt-6 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-sm"
      >
        + Add Experience
      </button>

    </div>
  );
}

export default Experience;  