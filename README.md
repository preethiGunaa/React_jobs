# React Job Application Project

This is a self-developed React project where I’m building a Job Application interface step-by-step while exploring modern frontend technologies. This README documents my progress and learnings from each day.

---

## 📅 Day 1 - Project Setup with Vite

### ✅ What I Did
- Installed **Node.js**
- Initialized the project using **Vite**
- Installed core dependencies:
  - `react`
  - `react-dom`
  - `vite`
- Verified basic React rendering using a test component
- Set up project folder structure

### ⚙️ Commands Used

```bash
# Initialize Vite + React project
npm create vite@latest react-job-app -- --template react

# Navigate into project folder
cd react-job-app

# Install dependencies
npm install

# Run the development server
npm run dev

# Day 2 - Tailwind CSS Setup in React (Vite)

On Day 2 of my self-developed Job Application project, I integrated **Tailwind CSS** into my React project (created with Vite). This allowed me to start building clean, responsive UIs using utility-first CSS.

---

## ✅ What I Did

- Installed Tailwind CSS and its dependencies
- Configured `tailwind.config.js` for Vite
- Added Tailwind’s base, components, and utilities to `index.css`
- Verified setup with a simple styled `h1` in `App.jsx`

---

## ⚙️ Setup Commands

```bash
# Navigate into the project folder
cd day2

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
