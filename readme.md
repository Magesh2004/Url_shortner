# 🔗 URL Shortening Service

A minimal and scalable **URL Shortening API** built with Node.js and Prisma. Easily shorten long URLs, retrieve original links, update or delete entries, and fetch basic usage statistics.

> This project is part of [roadmap.sh](https://roadmap.sh/projects/url-shortening-service)'s practical backend projects.

---

## 🧰 Tech Stack

| Layer         | Tech Used           |
| ------------- | ------------------- |
| **Runtime**   | Node.js             |
| **Framework** | Express.js          |
| **ORM**       | Prisma              |
| **Database**  | PostgreSQL / SQLite |
| **ID Gen**    | `nanoid`            |

---

## ⚙️ Setup Instructions

### 1. Clone the repo & install dependencies

```bash
git clone https://github.com/<your-username>/url-shortening-service.git
cd url-shortening-service
npm install
```

### 2. Configure environment variables

Create a `.env` file:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

### 3. Set up database with Prisma

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Start the server

```bash
npm run dev
```

---

## 📘 API Endpoints

### 1. 🔗 Create Short URL

**POST** `/shorten`

**Request Body**

```json
{
  "url": "https://www.example.com/some/long/url"
}
```

**Success Response**

```json
{
  "id": "1",
  "url": "https://www.example.com/some/long/url",
  "shortCode": "abc123",
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```

- `201 Created` on success
- `400 Bad Request` if input is missing or invalid
- Short codes are randomly generated and unique

---

### 2. 🔍 Retrieve Original URL

**GET** `/shorten/:shortCode`

**Response**

```json
{
  "id": "1",
  "url": "https://www.example.com/some/long/url",
  "shortCode": "abc123",
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```

- `200 OK` if found
- `404 Not Found` if shortCode doesn't exist

---

### 3. ✏️ Update Short URL

**PUT** `/shorten/:shortCode`

**Request Body**

```json
{
  "url": "https://www.example.com/some/updated/url"
}
```

**Response**

```json
{
  "id": "1",
  "url": "https://www.example.com/some/updated/url",
  "shortCode": "abc123",
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:30:00Z"
}
```

- `200 OK` if updated
- `400 Bad Request` if validation fails
- `404 Not Found` if shortCode doesn't exist

---

### 4. ❌ Delete Short URL

**DELETE** `/shorten/:shortCode`

- `204 No Content` if successfully deleted
- `404 Not Found` if shortCode doesn't exist

---

### 5. 📊 Get URL Statistics

**GET** `/shorten/:shortCode/stats`

**Response**

```json
{
  "id": "1",
  "url": "https://www.example.com/some/long/url",
  "shortCode": "abc123",
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z",
  "accessCount": 10
}
```

- `200 OK` with usage stats
- `404 Not Found` if shortCode doesn't exist

---

## 🙋 **Author & Contact**

**Author:** Magesh Balram

📧 **Email:** [mageshbalram4@gmail.com](mailto:mageshbalram4@gmail.com)

---
