# Novely - Minimal Submission Build

This repository is a trimmed minimal version of the Novely project meant for deployment
and submission verification. It includes a working signup/login flow (backend -> MongoDB Atlas)
and a React frontend (Vite + Tailwind) that hits the backend.

## How to use
- Fill in `backend/.env` with your MongoDB Atlas URI and preferred FRONTEND_URL.
- Deploy backend (Render/Heroku) using the `backend` folder.
- Deploy frontend (Vercel/Netlify) using the `frontend` folder. Set `VITE_API_BASE_URL` env var to your backend API base URL.
