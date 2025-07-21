# React User List App 
This is a simple React TypeScript application that fetches and displays a list of users from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users). The app uses React Router v7 and Vite for build tooling.

## Live Demo

[View Live App on Vercel](https://react-app-liart-delta.vercel.app)

---

## Tech Stack

- React 19 (TypeScript)
- React Router v7
- Vite
- JSONPlaceholder API
---

## 📦 Installation

1.Install dependencies:
bash
npm install

2.Run the development server:
bash
npm run dev

3.Visit http://localhost:5173 to view it locally.

## Folder Structure
bash
react-app/
├── components/
│   └── UserTable.tsx       # User table component
├── routes/
│   └── routeConfig.tsx     # React Router v7 config
├── App.tsx                 # Root component
├── main.tsx                # Entry point
├── index.css               # Global styles
├── app.css                 # App-specific styles
├── tsconfig.json           # TypeScript config
└── vite.config.ts          # Vite config

## Deployment (Vercel)
This project is set up for Vercel deployment with Vite.

Push the repo to GitHub.

Go to https://vercel.com and import your project.

Set:

Framework Preset: Vite

Build Command: npm run build

Output Directory: dist

Click Deploy.

## Features
Fetch users from external API

Display users in a clean table

Responsive UI

Modular code structure

Easy to extend and maintain



## License
This project is open-source and free to use.
