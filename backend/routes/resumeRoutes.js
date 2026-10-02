const express = require("express");
const Resume = require("../models/Resume");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const resume = new Resume(req.body);

    const savedResume = await resume.save();

    res.status(201).json(savedResume);
  } catch (error) {
    console.error("Error saving resume:", error.message);

    res.status(500).json({
      message: "Failed to save resume.",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ createdAt: -1 });

    res.json(resumes);
  } catch (error) {
    console.error("Error fetching resumes:", error.message);

    res.status(500).json({
      message: "Failed to fetch resumes.",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found.",
      });
    }

    res.json(resume);
  } catch (error) {
    console.error("Error fetching resume:", error.message);

    res.status(500).json({
      message: "Failed to fetch resume.",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedResume = await Resume.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after", runValidators: true }
    );

    if (!updatedResume) {
      return res.status(404).json({
        message: "Resume not found.",
      });
    }

    res.json(updatedResume);
  } catch (error) {
    console.error("Error updating resume:", error.message);

    res.status(500).json({
      message: "Failed to update resume.",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedResume = await Resume.findByIdAndDelete(req.params.id);

    if (!deletedResume) {
      return res.status(404).json({
        message: "Resume not found.",
      });
    }

    res.json({
      message: "Resume deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting resume:", error.message);

    res.status(500).json({
      message: "Failed to delete resume.",
    });
  }
});
module.exports = router;