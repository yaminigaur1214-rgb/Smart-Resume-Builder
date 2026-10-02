# Smart Resume Builder with AI Suggestions

## 📌 Project Overview

Smart Resume Builder with AI Suggestions is a web-based application that helps users create professional resumes easily.

The application provides an interactive resume builder, live resume preview, AI-powered content improvement, MongoDB database storage, resume editing, deletion, and PDF export.

---

## 🎯 Objective

The main objective of this project is to provide a simple and user-friendly platform where users can:

- Create professional resumes
- Enter personal and academic information
- Add skills, projects, and experience
- Improve resume content using AI suggestions
- Preview the resume in real time
- Save resumes in MongoDB
- Edit existing resumes
- Delete saved resumes
- Export resumes as PDF

---

## 🚀 Features

### 1. Personal Information
Users can enter:

- Full Name
- Email
- Phone Number
- Location
- LinkedIn
- GitHub

### 2. Professional Summary

Users can write a professional summary and improve it using the AI suggestion feature.

### 3. Education

Users can add multiple education records including:

- Degree / Course
- Institution
- Year
- CGPA / Percentage

### 4. Skills

Users can add multiple technical and professional skills.

### 5. Projects

Users can add:

- Project Name
- Description
- Technologies Used
- Project Link

Project descriptions can also be improved using AI suggestions.

### 6. Experience

Users can add:

- Job Title
- Company
- Duration
- Responsibilities and Achievements

Experience descriptions can also be improved using AI suggestions.

### 7. Live Resume Preview

The resume preview updates automatically as the user enters information.

### 8. AI Suggestions

The application provides AI-style suggestions for:

- Professional Summary
- Project Description
- Experience Description

### 9. MongoDB Storage

Resume information is stored in MongoDB.

Users can:

- Save resumes
- View saved resumes
- Edit resumes
- Update resumes
- Delete resumes

### 10. PDF Export

Users can export their completed resume as a PDF using the browser's print/save-to-PDF functionality.

---

## 🛠️ Technologies Used

### Frontend

- React.js
- JavaScript
- Tailwind CSS
- React Router

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Development Tools

- Visual Studio Code
- Git
- GitHub
- npm

---

## 📂 Project Structure

```text
Smart_Resume_Builder
│
├── backend
│   ├── config
│   │   └── db.js
│   ├── models
│   │   └── Resume.js
│   ├── routes
│   │   ├── aiRoutes.js
│   │   └── resumeRoutes.js
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
└── README.md