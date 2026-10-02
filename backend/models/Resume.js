const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    github: {
      type: String,
      default: "",
    },

    summary: {
      type: String,
      default: "",
    },

    education: [
      {
        degree: {
          type: String,
          default: "",
        },
        institution: {
          type: String,
          default: "",
        },
        year: {
          type: String,
          default: "",
        },
        grade: {
          type: String,
          default: "",
        },
      },
    ],

    skills: {
      type: [String],
      default: [],
    },

    projects: [
      {
        name: {
          type: String,
          default: "",
        },
        description: {
          type: String,
          default: "",
        },
        technologies: {
          type: String,
          default: "",
        },
        link: {
          type: String,
          default: "",
        },
      },
    ],

    experience: [
      {
        jobTitle: {
          type: String,
          default: "",
        },
        company: {
          type: String,
          default: "",
        },
        duration: {
          type: String,
          default: "",
        },
        description: {
          type: String,
          default: "",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;