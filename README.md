# 📚 Library Management System

A full-stack Library Management System built using Node.js, Express, MongoDB, and Vanilla JavaScript. This application allows users to manage books efficiently by adding, viewing, deleting, issuing, and returning books.

---

## 🚀 Features

* 📖 Add new books
* 📚 View all books
* ❌ Delete books
* 🔄 Issue books
* ✅ Return books
* 🌐 Simple and responsive UI

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Tools:** Postman, Git, GitHub

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Navjotdyal/Library_book_management_system.git
```

### 2. Navigate to project folder

```bash
cd Library_book_management_system
```

### 3. Install backend dependencies

```bash
cd backend
npm install
```

### 4. Create `.env` file in backend folder

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/libraryDB
```

### 5. Run backend server

```bash
npm run dev
```

### 6. Run frontend

Open `frontend/index.html` using Live Server

---

## 🌐 API Endpoints

| Method | Endpoint              | Description    |
| ------ | --------------------- | -------------- |
| GET    | /api/books            | Get all books  |
| POST   | /api/books            | Add a new book |
| DELETE | /api/books/:id        | Delete a book  |
| PUT    | /api/books/issue/:id  | Issue a book   |
| PUT    | /api/books/return/:id | Return a book  |

---

## 📂 Project Structure

```
backend/
  ├── config/
  ├── controllers/
  ├── models/
  ├── routes/
  └── server.js

frontend/
  ├── index.html
  ├── style.css
  └── script.js
```

---

## 👨‍💻 Author

Navjot Singh
LinkedIn: https://www.linkedin.com/in/navjot-singh-960a71244

---

## 📌 Future Improvements

* 🔐 User authentication (Login/Signup)
* 🔍 Search & filter functionality
* 📅 Due date tracking
* 📊 Admin dashboard

---
