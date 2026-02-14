# Meeting-Tracker

**Author:** Muzammil Raza Khan

A mini workspace to extract and manage action items from meeting transcripts using an LLM.

---

## Features

* Paste meeting transcript
* Extract action items using LLM
* Edit, add, delete action items
* Mark actions as done
* Filter actions (Open / Done / All)
* Pagination for actions
* Transcript history with pagination
* Expand full transcript (View More)

---

## Tech Stack

**Frontend**

* React (Vite)
* Axios

**Backend**

* Node.js
* Express
* SQLite

**LLM**

* OpenAI (llama-3.1-8b-instant)

---

## Project Structure

```
Meeting-Tracker/
│
├── Backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── db.js
│   └── server.js
│
├── Frontend/
│   ├── components/
│   ├── pages/
│   ├── api/
│   └── App.jsx
```

---

## Setup Instructions

### Backend

```
cd Backend
npm install
```

Create `.env`

```
GROQ_API_KEY = paste_your_key_here
```

Run:

```
npm run start
```

---

### Frontend

```
cd frontend
npm install
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint     | Description                     |
| ------ | ------------ | ------------------------------- |
| POST   | /transcripts | Extract actions from transcript |
| GET    | /actions     | Get all actions                 |
| POST   | /actions     | Add action                      |
| PUT    | /actions/:id | Toggle done                     |
| DELETE | /actions/:id | Delete action                   |
| GET    | /transcripts | Get transcript history          |
| GET    | /health      | Backend health check            |

---

## Health Page

Shows status of:

* Backend
* Database
* LLM connection

---

## What is Implemented

* Full CRUD for actions
* LLM-based extraction
* Pagination (client-side)
* Transcript history with expand/collapse

---

## Future Improvements

* Backend pagination
* Authentication
* Search & sorting
* Bulk delete

## License

© 2026 Muzammil Raza Khan. All Rights Reserved.

This project and its source code are provided for evaluation purposes only.
No part of this repository may be copied, modified, distributed, or used for commercial purposes without explicit written permission from the author.
