# React Job Application Project

This is a self-developed React project where I’m building a Job Application interface step-by-step while exploring modern frontend technologies. This README documents my progress and learnings from each day.

---

## 📅 Day 1 - Project Setup with Vite

###  What I Did
- Installed **Node.js**
- Initialized the project using **Vite**
- Installed core dependencies:
  - `react`
  - `react-dom`
  - `vite`
- Verified basic React rendering using a test component
- Set up project folder structure

###  Commands Used

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

📅 Day 2-Applying some Tailwind css

On Day 2 of my self-developed Job Application project, I integrated **Tailwind CSS** into my React project (created with Vite). This allowed me to start building clean, responsive UIs using utility-first CSS.

---

##  What I Did

- Installed Tailwind CSS and its dependencies
- Configured `tailwind.config.js` for Vite
- Added Tailwind’s base, components, and utilities to `index.css`
- Verified setup with a simple styled `h1` in `App.jsx`

---

##  Setup Commands

```bash
# Navigate into the project folder
cd day2

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


 Day 3 - React Project Update

## ✅ What I Did

- Separated UI into **multiple small reusable components**
- Used **ES Modules** to import components into `App.jsx`
- Created a **Card component** for displaying item information
- Downloaded a **JSON file** and used it as mock data
- Extracted and mapped data from the JSON file
- Used **callback functions** for data communication between components

## 🧩 Components Created

- `Header.jsx`
- `Card.jsx`
- `CardList.jsx`
- `Footer.jsx`etc..

## 📦 JSON Data

- Placed a local `data.json` file in the `src` folder (or `public`)
- Loaded data using map function map()

## 🔁 Callback Usage

- Passed data from parent to child
