function ResumePreview({ resume }) {
  return (
    <div
      className="resume-preview bg-white shadow-xl rounded-lg p-8 md:p-10 min-h-[1100px] text-gray-800 border border-gray-200"
    >
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-5">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          {resume.name || "Your Name"}
        </h1>

        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-3 text-sm text-gray-600">
          {resume.email && <span>{resume.email}</span>}

          {resume.phone && (
            <>
              {resume.email && <span>•</span>}
              <span>{resume.phone}</span>
            </>
          )}

          {resume.location && (
            <>
              {(resume.email || resume.phone) && <span>•</span>}
              <span>{resume.location}</span>
            </>
          )}

          {resume.linkedin && (
            <>
              {(resume.email ||
                resume.phone ||
                resume.location) && <span>•</span>}
              <span>{resume.linkedin}</span>
            </>
          )}

          {resume.github && (
            <>
              {(resume.email ||
                resume.phone ||
                resume.location ||
                resume.linkedin) && <span>•</span>}
              <span>{resume.github}</span>
            </>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {resume.summary && (
        <section className="mt-6">
          <h2 className="text-base font-bold uppercase tracking-wide border-b-2 border-gray-300 pb-1">
            Professional Summary
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-700 text-justify">
            {resume.summary}
          </p>
        </section>
      )}

      {/* Education */}
      {resume.education?.some(
        (edu) =>
          edu.degree ||
          edu.institution ||
          edu.year ||
          edu.grade
      ) && (
        <section className="mt-6">
          <h2 className="text-base font-bold uppercase tracking-wide border-b-2 border-gray-300 pb-1">
            Education
          </h2>

          <div className="mt-3 space-y-4">
            {resume.education.map((edu, index) => {
              if (
                !edu.degree &&
                !edu.institution &&
                !edu.year &&
                !edu.grade
              ) {
                return null;
              }

              return (
                <div key={index}>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-gray-900">
                      {edu.degree}
                    </h3>

                    {edu.year && (
                      <span className="text-sm text-gray-600 whitespace-nowrap">
                        {edu.year}
                      </span>
                    )}
                  </div>

                  {edu.institution && (
                    <p className="text-sm text-gray-700 mt-1">
                      {edu.institution}
                    </p>
                  )}

                  {edu.grade && (
                    <p className="text-sm text-gray-600 mt-1">
                      {edu.grade}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Skills */}
      {resume.skills?.length > 0 && (
        <section className="mt-6">
          <h2 className="text-base font-bold uppercase tracking-wide border-b-2 border-gray-300 pb-1">
            Skills
          </h2>

          <div className="mt-3 text-sm text-gray-700 leading-6">
            {resume.skills.map((skill, index) => (
              <span key={index}>
                {skill}
                {index !== resume.skills.length - 1 && (
                  <span className="mx-2 text-gray-400">•</span>
                )}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {resume.projects?.some(
        (project) =>
          project.name ||
          project.description ||
          project.technologies ||
          project.link
      ) && (
        <section className="mt-6">
          <h2 className="text-base font-bold uppercase tracking-wide border-b-2 border-gray-300 pb-1">
            Projects
          </h2>

          <div className="mt-3 space-y-5">
            {resume.projects.map((project, index) => {
              if (
                !project.name &&
                !project.description &&
                !project.technologies &&
                !project.link
              ) {
                return null;
              }

              return (
                <div key={index}>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-gray-900">
                      {project.name}
                    </h3>

                    {project.link && (
                      <span className="text-xs text-blue-600 break-all text-right">
                        {project.link}
                      </span>
                    )}
                  </div>

                  {project.description && (
                    <p className="text-sm mt-1 leading-5 text-gray-700 text-justify">
                      {project.description}
                    </p>
                  )}

                  {project.technologies && (
                    <p className="text-sm mt-2 text-gray-700">
                      <span className="font-semibold">
                        Technologies:
                      </span>{" "}
                      {project.technologies}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Experience */}
      {resume.experience?.some(
        (experience) =>
          experience.jobTitle ||
          experience.company ||
          experience.duration ||
          experience.description
      ) && (
        <section className="mt-6">
          <h2 className="text-base font-bold uppercase tracking-wide border-b-2 border-gray-300 pb-1">
            Experience
          </h2>

          <div className="mt-3 space-y-5">
            {resume.experience.map((experience, index) => {
              if (
                !experience.jobTitle &&
                !experience.company &&
                !experience.duration &&
                !experience.description
              ) {
                return null;
              }

              return (
                <div key={index}>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-gray-900">
                      {experience.jobTitle}
                    </h3>

                    {experience.duration && (
                      <span className="text-sm text-gray-600 whitespace-nowrap">
                        {experience.duration}
                      </span>
                    )}
                  </div>

                  {experience.company && (
                    <p className="text-sm font-medium text-gray-700 mt-1">
                      {experience.company}
                    </p>
                  )}

                  {experience.description && (
                    <p className="text-sm mt-1 leading-5 text-gray-700 text-justify">
                      {experience.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

export default ResumePreview;