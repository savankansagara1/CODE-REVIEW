# Code Review AI

## Overview
Code Review AI is a full-stack application that provides automated code reviews using AI. The frontend is built with **React** and **Vite**, while the backend is powered by **Express**. The application allows users to input code, submit it for review, and receive AI-generated feedback.

## Technologies Used

### Backend
- **Express.js** - Minimal and flexible Node.js web application framework.
- **CORS** - Middleware to enable Cross-Origin Resource Sharing.
- **Axios** - HTTP client for making API requests.
- **dotenv** - Loads environment variables from a `.env` file.

### Frontend
- **React.js** - A JavaScript library for building user interfaces.
- **Vite** - A fast and modern frontend build tool.
- **React Simple Code Editor** - Lightweight code editor for live editing.
- **Prism.js** - Syntax highlighting for the code editor.
- **React Markdown** - To render markdown-based AI reviews.
- **Highlight.js** - Additional syntax highlighting support.
- **Axios** - To send requests to the backend.

## Project Structure

```
code-review-ai/
├── backend/ 📂
│   ├── routes/ 🛤️
│   │   └── ai.routes.js 🤖
│   ├── app.js 🚀
│   ├── server.js 🌍
│   ├── package.json 📦
│   ├── .env 🌐
├── frontend/ 🌐
│   ├── src/ 💻
│   │   ├── components/ 🧩
│   │   │   ├── CodeEditor.jsx ✍️
│   │   │   ├── ReviewPanel.jsx 📜
│   │   ├── App.jsx 📝
│   │   ├── App.css 🎨
│   │   ├── index.js 📄
│   ├── public/ 🌍
│   ├── package.json 📦
│   ├── vite.config.js ⚙️
│   ├── README.md 📖
```

## How It Works
1. Users enter code into the **code editor**.
2. Clicking the **Review** button sends the code to the backend API.
3. The backend processes the code and returns AI-generated feedback.
4. The review results are displayed in the **review panel**.

## Features
✅ **Live Code Editing** - Users can write and edit code in a syntax-highlighted editor.
✅ **AI Code Review** - Get AI-powered feedback on submitted code.
✅ **Syntax Highlighting** - Enhanced readability with Prism.js and Highlight.js.
✅ **Markdown Support** - AI reviews are formatted using Markdown.
✅ **Fully Responsive** - Mobile-friendly design for all screen sizes.

## Getting Started

### Prerequisites
- **Node.js** installed
- **npm** 

### Backend Setup
```sh
git clone https://github.com/your-username/code-review-ai.git
cd code-review-ai/backend
npm install
cp .env.example .env  # Add necessary environment variables
npm start
```

### Frontend Setup
```sh
cd ../frontend
npm install
npm run dev
```

## Usage
- Open `http://localhost:5173` for the frontend.
- Ensure the backend is running (`http://localhost:8080` by default).
- Enter code in the editor and click **Review**.
- View the AI-generated feedback on the right panel.

## Troubleshooting
- **CORS issues?** Ensure `cors()` is properly configured in `app.js`.
- **Deployment errors?** Check your **backend/frontend environment variables**.
- **Not receiving reviews?** Verify the backend is running and accessible.

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## Contact
For questions or feedback, contact me at [savankansagara1005@gmail.com].

