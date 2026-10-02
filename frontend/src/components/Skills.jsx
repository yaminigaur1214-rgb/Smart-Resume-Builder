import { useState } from "react";

function Skills({ resume, setResume }) {
  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    if (skillInput.trim() === "") {
      return;
    }

    setResume({
      ...resume,
      skills: [...resume.skills, skillInput.trim()],
    });

    setSkillInput("");
  };

  const removeSkill = (index) => {
    const updatedSkills = resume.skills.filter(
      (_, i) => i !== index
    );

    setResume({
      ...resume,
      skills: updatedSkills,
    });
  };

  return (
    <div className="bg-white p-6 md:p-7 rounded-2xl shadow-md border border-gray-100">

      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-xl">
            💡
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            Skills
          </h2>
        </div>

        <p className="text-sm text-gray-500">
          Add technical and professional skills that showcase your abilities.
        </p>
      </div>

      {/* Add Skill */}
      <div className="flex flex-col sm:flex-row gap-3">

        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addSkill();
            }
          }}
          placeholder="e.g. Java, Python, React.js"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
        />

        <button
          type="button"
          onClick={addSkill}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-sm"
        >
          + Add Skill
        </button>

      </div>

      {/* Skills List */}
      {resume.skills.length > 0 ? (
        <div className="mt-6">

          <p className="text-sm font-semibold text-gray-700 mb-3">
            Added Skills ({resume.skills.length})
          </p>

          <div className="flex flex-wrap gap-3">

            {resume.skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 px-4 py-2 rounded-full font-medium"
              >
                <span>{skill}</span>

                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="w-5 h-5 flex items-center justify-center rounded-full text-red-500 hover:bg-red-100 hover:text-red-700 transition"
                  aria-label={`Remove ${skill}`}
                >
                  ×
                </button>
              </div>
            ))}

          </div>

        </div>
      ) : (
        <div className="mt-6 bg-gray-50 border border-dashed border-gray-300 rounded-xl p-6 text-center">
          <p className="text-gray-500 text-sm">
            No skills added yet. Add your first skill above.
          </p>
        </div>
      )}

    </div>
  );
}

export default Skills;