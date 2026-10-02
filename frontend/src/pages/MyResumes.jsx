import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MyResumes() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteResume = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/resumes/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete resume.");
      }

      setResumes((currentResumes) =>
        currentResumes.filter((resume) => resume._id !== id)
      );

      alert("Resume deleted successfully!");
    } catch (error) {
      console.error("Delete Resume Error:", error);
      alert("Unable to delete resume.");
    }
  };

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/resumes"
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch resumes.");
        }

        setResumes(data);
      } catch (error) {
        console.error("Fetch Resumes Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              My Resumes
            </h1>
            <p className="text-gray-500 mt-2">
              Manage and edit your saved resumes.
            </p>
          </div>

          <Link
            to="/builder"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
          >
            + Create Resume
          </Link>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-4xl mb-4">📄</div>
            <p className="text-gray-600">
              Loading your resumes...
            </p>
          </div>
        ) : resumes.length > 0 ? (

          /* Resume Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumes.map((resume) => (
              <div
                key={resume._id}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-200"
              >
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 text-blue-600 w-11 h-11 rounded-lg flex items-center justify-center text-xl">
                        📄
                      </div>

                      <div>
                        <h2 className="text-xl font-bold text-gray-800">
                          {resume.name || "Untitled Resume"}
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                          {resume.email || "No email added"}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Resume statistics */}
                <div className="grid grid-cols-3 gap-3 mt-6">

                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <p className="text-xl font-bold text-blue-600">
                      {resume.skills?.length || 0}
                    </p>
                    <p className="text-xs text-gray-500">
                      Skills
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <p className="text-xl font-bold text-purple-600">
                      {resume.projects?.length || 0}
                    </p>
                    <p className="text-xs text-gray-500">
                      Projects
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <p className="text-xl font-bold text-green-600">
                      {resume.education?.length || 0}
                    </p>
                    <p className="text-xs text-gray-500">
                      Education
                    </p>
                  </div>

                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">

                  <Link
                    to={`/builder/${resume._id}`}
                    className="flex-1 text-center bg-green-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-green-700 transition duration-200"
                  >
                    ✏️ Edit Resume
                  </Link>

                  <button
                    onClick={() => deleteResume(resume._id)}
                    className="flex-1 bg-red-50 text-red-600 border border-red-200 px-4 py-2.5 rounded-lg font-medium hover:bg-red-100 transition duration-200"
                  >
                    🗑️ Delete
                  </button>

                </div>
              </div>
            ))}
          </div>

        ) : (

          /* Empty state */
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center">

            <div className="text-6xl mb-5">
              📄
            </div>

            <h2 className="text-2xl font-bold text-gray-700">
              No saved resumes yet
            </h2>

            <p className="text-gray-500 mt-2 max-w-md mx-auto">
              Create your first professional resume and it will appear here.
            </p>

            <Link
              to="/builder"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            >
              Create My Resume
            </Link>

          </div>
        )}

      </div>
    </div>
  );
}

export default MyResumes;