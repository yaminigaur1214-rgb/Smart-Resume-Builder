const express = require("express");

const router = express.Router();

router.post("/improve-summary", async (req, res) => {
  const { summary } = req.body;

  if (!summary || summary.trim() === "") {
    return res.status(400).json({
      message: "Please provide a professional summary.",
    });
  }

  // Temporary mock AI response
  const improvedSummary =
    "Motivated and enthusiastic student with an interest in Java and React. " +
    "Passionate about learning new technologies and developing practical skills " +
    "through projects and continuous learning.";

  res.json({
    originalSummary: summary,
    improvedSummary: improvedSummary,
  });
});

router.post("/improve-project", async (req, res) => {
  const { description } = req.body;

  if (!description || description.trim() === "") {
    return res.status(400).json({
      message: "Please provide a project description.",
    });
  }

  // Temporary mock AI response
  const improvedDescription =
    "Developed a practical project that demonstrates problem-solving " +
    "skills, technical knowledge, and the ability to build an effective " +
    "solution using modern development practices.";

  res.json({
    originalDescription: description,
    improvedDescription: improvedDescription,
  });
});

router.post("/improve-experience", async (req, res) => {
  const { description } = req.body;

  if (!description || description.trim() === "") {
    return res.status(400).json({
      message: "Please provide an experience description.",
    });
  }

  // Temporary mock AI response
  const improvedDescription =
    "Contributed to software development tasks, collaborated with team members, " +
    "solved technical problems, and gained practical experience in developing " +
    "and improving software solutions.";

  res.json({
    originalDescription: description,
    improvedDescription: improvedDescription,
  });
});

module.exports = router;