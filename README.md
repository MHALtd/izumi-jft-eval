# Izumi JFT Evaluation

**Izumi JFT Evaluation** is a web-based platform designed for Japanese language learners to practice for the **Japanese Foundation Test (JFT)**. The project provides comprehensive exercises in grammar, listening, reading, and vocabulary to help learners improve their Japanese skills.

## Project Overview

The Izumi JFT Evaluation platform offers a collection of quizzes standardized to the JFT, covering key language areas. It enables learners to prepare efficiently for the test with real-time evaluations and a user-friendly interface.

## Features

- **Japanese Grammar (Bunpou)**
- **Listening Comprehension (Choukai)**
- **Reading Comprehension (Dokkai)**
- **Vocabulary (Goi)**
- Real-time evaluation of test performance
- Responsive design, suitable for mobile and desktop users

## Tech Stack

- **Frontend**: ReactJS, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Installation

### Database Setup

1. Open MongoDB.
2. Create a database called `jft` with the following collections:
   - `bunpou`
   - `choukai`
   - `dokkai`
   - `goi`
3. Insert JSON documents from the "quiz-bank" folder into their respective collections.
4. Ensure the database is publicly accessible:
   - Set `Network Access` to `0.0.0.0/0`.
5. Return to the clusters dashboard.
6. Click "Connect" and select "MongoDB for VS Code".
7. Copy your MongoDB URL and append `/jft` at the end.
   - Example: `mongodb+srv://Izumi:<db_password>@cluster0.***.mongodb.net/jft`

### Backend Setup

1. In the `backend` directory, create a `.env` file with the following variables:
   - `PORT` = (your choice, e.g., 5000)
   - `MONGODB_URL` = Your MongoDB URL (e.g., `mongodb+srv://Izumi:<db_password>@cluster0.***.mongodb.net/jft`)
2. Open a terminal, navigate to the `backend` folder:
   ```bash
   cd ./backend
   ```
3. Run the following commands to install dependencies and start the backend:
   ```bash
   npm install
   npm start
   ```

### Frontend Setup

1. In the `frontend` directory, create a `.env` file with:
   - `VITE_BACKEND_URL` = Your backend URL (e.g., `http://localhost:5000/`)
2. Open another terminal, navigate to the `frontend` folder:
   ```bash
   cd ./frontend
   ```
3. Install dependencies and start the frontend:
   ```bash
   npm install
   npm run dev
   ```

## Usage

After setting up the project, access the frontend via your local browser at the specified port (e.g., `http://localhost:5173`). From here, users can practice grammar, listening, reading, and vocabulary skills according to JFT standards.
