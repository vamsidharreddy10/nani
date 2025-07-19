# 🎓 Student Support Hub

A modern, full-stack web platform to help students manage stress, improve study habits, get financial guidance, and connect through anonymous forums.

---

## 🌟 Features

### ✅ Frontend (HTML + CSS + JavaScript)
- Responsive UI (Mobile & Desktop)
- Light/Dark mode toggle 🌗
- Flashcards, study tools, YouTube resources
- Anonymous forums with local or cloud storage
- Comment system with live feedback

### ✅ Backend (Node.js + Express + MongoDB)
- API for submitting and retrieving forum posts
- Data persistence with MongoDB
- Ready for deployment (Render, Railway, Vercel)

### ✅ Firebase Integration
- Realtime chat with Firestore
- User authentication (Email & Google)
- Admin roles with moderation tools
- Role-based content access

---

## 🔧 Tech Stack

| Tech        | Description                          |
|-------------|--------------------------------------|
| HTML/CSS/JS | Frontend UI and interactions         |
| Firebase    | Realtime DB, Auth, Hosting (optional)|
| Node.js     | Backend API                          |
| Express     | Web framework for routing            |
| MongoDB     | NoSQL database for storing posts     |
| Firestore   | Realtime chat and post updates       |

---

## 📦 Project Structure
student-support-hub/
├── public/                     # Frontend static files (served by Express)
│   ├── index.html              # Home page
│   ├── forum.html              # Anonymous forum
│   ├── study-tools.html        # Study section
│   ├── mental-health.html      # Mental health section
│   ├── financial.html          # Financial help section
│   ├── contact.html            # Contact form
│   ├── css/
│   │   └── styles.css          # All styling (light/dark mode, mobile)
│   └── js/
│       ├── main.js             # Common logic (toggle theme, nav, etc.)
│       ├── forum.js            # Handles forum post rendering
│       ├── study-tools.js      # Flashcards, timers, etc.
│       └── firebase.js         # Firebase SDK config
│
├── server.js                   # Express server setup
├── routes/                     # API endpoints
│   └── comments.js             # /api/comments CRUD routes
├── models/                     # Mongoose schemas
│   └── Comment.js              # Comment schema
├── firebaseConfig.js           # Firebase initialization and admin SDK
├── utils/
│   └── authMiddleware.js       # Auth check, admin check
│
├── .env                        # Environment variables (Mongo URI, Firebase key)
├── package.json
└── README.md


🔄 Ready for Deployment:
🟢 Frontend static files served by Express

🌐 Backend API can be hosted on Render, Railway, etc.

🔥 Firebase handles Auth + realtime sync

🛠️ MongoDB stores forum data permanently


