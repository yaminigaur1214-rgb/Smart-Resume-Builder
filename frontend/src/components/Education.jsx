function Education({ resume, setResume }) {
  const addEducation = () => {
    setResume({
      ...resume,
      education: [
        ...resume.education,
        {
          degree: "",
          institution: "",
          year: "",
          grade: "",
        },
      ],
    });
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;

    const updatedEducation = [...resume.education];

    updatedEducation[index][name] = value;

    setResume({
      ...resume,
      education: updatedEducation,
    });
  };

  return (
    <div className="bg-white p-6 md:p-7 rounded-2xl shadow-md border border-gray-100">

      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-xl">
            🎓
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            Education
          </h2>
        </div>

        <p className="text-sm text-gray-500">
          Add your academic qualifications, institutions, and grades.
        </p>
      </div>

      {/* Education Entries */}
      <div className="space-y-5">
        {resume.education.map((edu, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-5 bg-gray-50"
          >
            {/* Education Number */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <h3 className="font-semibold text-gray-800">
                Education {index + 1}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Degree */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Degree / Course
                </label>

                <input
                  type="text"
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="e.g. B.Tech Computer Science"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-white"
                />
              </div>

              {/* Institution */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  College / School
                </label>

                <input
                  type="text"
                  name="institution"
                  value={edu.institution}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="e.g. G.L. Bajaj Group of Institutions"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-white"
                />
              </div>

              {/* Year */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Year
                </label>

                <input
                  type="text"
                  name="year"
                  value={edu.year}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="e.g. 2024 - 2028"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-white"
                />
              </div>

              {/* Grade */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  CGPA / Percentage
                </label>

                <input
                  type="text"
                  name="grade"
                  value={edu.grade}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="e.g. 7.5 CGPA or 80%"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-white"
                />
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Add Education Button */}
      <button
        type="button"
        onClick={addEducation}
        className="mt-6 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-sm"
      >
        + Add Education
      </button>

    </div>
  );
}

export default Education;