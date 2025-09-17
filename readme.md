# 🛠️ MongoDB + Express.js + Next.js + Node.JS + JWT Dashboard App (MENN Stack)

A simple **full-stack application** where users can:

- 🔐 Sign up & log in (with hashed passwords using bcrypt)  
- ✅ Get authenticated using **JWT tokens**  
- 📝 Update their **dashboard data** (stored in MongoDB)  
- 🔒 Only access/update their own dashboard after login  

---

## 📂 Project Structure

```text
project-root/
│── backend/              # Express.js API
│   ├── models/           # MongoDB Mongoose models
│   │   └── User.js
│   ├── routes/           # API routes
│   │   └── dashboard.js
│   ├── middleware/       # JWT auth middleware
│   │   └── auth.js
│   ├── server.js         # Express app entry
│   └── .env              # Backend environment variables
│
│── frontend/             # Next.js frontend
│   ├── app/
│   │   ├── login/page.js
│   │   ├── signup/page.js
│   │   └── dashboard/page.js
│   └── .env.local        # Frontend environment variables
│
└── README.md
```

## ⚙️ Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/)  
- **Backend:** [Express.js](https://expressjs.com/) + [Node.js](https://nodejs.org/)  
- **Database:** [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)  
- **Auth:** [JWT](https://jwt.io/)  
- **Security:** [bcrypt](https://www.npmjs.com/package/bcrypt)  

---

## 🚀 Live Demo

[👉 Click here to try the LIVE APP](https://auth-iota-tan.vercel.app/)


## 👨‍💻 Contact

If you like this project and want to integrate it into your own project,
simply contact the developer:

**Email:** [develop.code.sm@gmail.com](mailto:develop.code.sm@gmail.com)