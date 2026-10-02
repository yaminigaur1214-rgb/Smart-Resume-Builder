import { useState } from "react";
import { improveProject } from "../services/aiservice";

function Projects({ resume, setResume }) {
  const [improvingProject, setImprovingProject] = useState(null);

  const handleImproveProject = async (index) => {
    const description = resume.projects[index].description;

    if (!description || description.trim() === "") {
      alert("Please write a project description first.");
      return;
    }

    setImprovingProject(index);

    try {
      const improvedDescription = await improveProject(description);

      const updatedProjects = [...resume.projects];

      updatedProjects[index] = {
        ...updatedProjects[index],
        description: improvedDescription,
      };

      setResume({
        ...resume,
        projects: updatedProjects,
      });
    } catch (error) {
      console.error("AI Project Error:", error);
      alert("Unable to improve project description.");
    } finally {
      setImprovingProject(null);
    }
  };

  const addProject = () => {
    setResume({
      ...resume,
      projects: [
        ...resume.projects,
        {
          name: "",
          description: "",
          technologies: "",
          link: "",
        },
      ],
    });
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;

    const updatedProjects = [...resume.projects];

    updatedProjects[index][name] = value;

    setResume({
      ...resume,
      projects: updatedProjects,
    });
  };

  const removeProject = (index) => {
    const updatedProjects = resume.projects.filter(
      (_, i) => i !== index
    );

    setResume({
      ...resume,
      projects: updatedProjects,
    });
  };

  return (
    <div className="bg-white p-6 md:p-7 rounded-2xl shadow-md border border-gray-100">

      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-xl">
            💻
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            Projects
          </h2>
        </div>

        <p className="text-sm text-gray-500">
          Showcase your academic, personal, or professional projects.
        </p>
      </div>

      {/* Project Entries */}
      <div className="space-y-5">

        {resume.projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-5 bg-gray-50"
          >

            {/* Project Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-5">

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <h3 className="font-semibold text-gray-800">
                  Project {index + 1}
                </h3>
              </div>

              {resume.projects.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeProject(index)}
                  className="text-red-500 border border-red-200 bg-red-50 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-red-100 hover:text-red-700 transition"
                >
                  🗑 Remove
                </button>
              )}

            </div>

            <div className="space-y-5">

              {/* Project Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={project.name}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="e.g. Smart Resume Builder with AI Suggestions"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Description
                </label>

                <textarea
                  name="description"
                  value={project.description}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Describe what you built, the problem it solves, and your contribution..."
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white"
                />

                {/* AI Button */}
                <button
                  type="button"
                  onClick={() => handleImproveProject(index)}
                  disabled={improvingProject === index}
                  className="mt-3 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-sm disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {improvingProject === index
                    ? "✨ Improving..."
                    : "✨ Improve with AI"}
                </button>
              </div>

              {/* Technologies */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Technologies Used
                </label>

                <input
                  type="text"
                  name="technologies"
                  value={project.technologies}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="e.g. React, Node.js, MongoDB, Tailwind CSS"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white"
                />
              </div>

              {/* Project Link */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Link
                </label>

                <input
                  type="text"
                  name="link"
                  value={project.link}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="GitHub repository or live demo link"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white"
                />
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Add Project */}
      <button
        type="button"
        onClick={addProject}
        className="mt-6 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-sm"
      >
        + Add Project
      </button>

    </div>
  );
}

export default Projects;