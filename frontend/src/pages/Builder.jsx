import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PersonalInfo from "../components/PersonalInfo";
import ProfessionalSummary from "../components/ProfessionalSummary";
import ResumePreview from "../components/ResumePreview";

function Builder() {
  const { id } = useParams();

  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    summary: "",

    education: [
      {
        degree: "",
        institution: "",
        year: "",
        grade: "",
      },
    ],

    skills: [],

    projects: [
      {
        name: "",
        description: "",
        technologies: "",
        link: "",
      },
    ],

    experience: [
      {
        jobTitle: "",
        company: "",
        duration: "",
        description: "",
      },
    ],
  });

  useEffect(() => {
    const loadResume = async () => {
      if (!id) {
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:5000/api/resumes/${id}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to load resume.");
        }

        setResume(data);
      } catch (error) {
        console.error("Load Resume Error:", error);
        alert("Unable to load resume.");
      }
    };

    loadResume();
  }, [id]);

  const saveResume = async () => {
    try {
      const url = id
        ? `http://localhost:5000/api/resumes/${id}`
        : "http://localhost:5000/api/resumes";

      const method = id ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resume),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save resume.");
      }

      alert(
        id
          ? "Resume updated successfully in MongoDB!"
          : "Resume saved successfully in MongoDB!"
      );

    } catch (error) {
      console.error("Save Resume Error:", error);
      alert("Unable to save resume.");
    }
  };

  return (
    <div className="resume-builder-page min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 md:p-8">

      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Resume Builder
          </h1>

          <p className="text-gray-500 mt-1">
            Create and customize your professional resume
          </p>
        </div>

        <div className="flex flex-wrap gap-3">

          <button
            onClick={saveResume}
            className="bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition duration-200 shadow-sm"
          >
            💾 Save Resume
          </button>

          <button
            onClick={() => window.print()}
            className="bg-purple-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-700 transition duration-200 shadow-sm"
          >
            📄 Download PDF
          </button>

        </div>
      </div>

      {/* Main Content */}
      <div className="resume-builder-content max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* Left Side - Form */}
        <div className="resume-form space-y-6">

          <PersonalInfo
            resume={resume}
            setResume={setResume}
          />

          <ProfessionalSummary
            resume={resume}
            setResume={setResume}
          />

          <Education
            resume={resume}
            setResume={setResume}
          />

          <Skills
            resume={resume}
            setResume={setResume}
          />

          <Projects
            resume={resume}
            setResume={setResume}
          />

          <Experience
            resume={resume}
            setResume={setResume}
          />

        </div>

        {/* Right Side - Preview */}
        <div className="resume-preview-container lg:sticky lg:top-6">

          <ResumePreview
            resume={resume}
          />

        </div>

      </div>

    </div>
  );
}

export default Builder;