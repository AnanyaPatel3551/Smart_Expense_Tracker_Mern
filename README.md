# Smart Expense Tracker

Smart Expense Tracker is a full-stack MERN application designed to help users manage their personal finances efficiently. Users can register, login, manage their transactions, set budgets, and track their spending in a simple and secure environment.

This project demonstrates a practical implementation of a full-stack web application, using React for the frontend, Node.js and Express for the backend, and MongoDB for data storage. It also incorporates JWT authentication for secure user management.

---

## Features

-   **User Authentication:** Secure signup and login using JWT tokens.
-   **Expense Management:** Users can add, edit, and delete transactions.
-   **Budget Tracking:** Users can set monthly spending limits and track expenses against them.
-   **Avatar Selection:** Users can personalize their account with avatars.
-   **Responsive Design:** The application is usable on desktop and mobile devices.

---

## Tech Stack

-   **Frontend:** React, React Router, Axios, CSS
-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB with Mongoose
-   **Authentication:** JSON Web Tokens (JWT)
-   **Deployment:** Render for backend, Netlify/Vercel for frontend

---

## Project Structure

```text
Expense-Tracker-App/
│
├─ backend/ # Node.js + Express backend
│ ├─ DB/ # Database connection
│ ├─ Routers/ # API routes (user, transactions)
│ ├─ app.js # Server entry point
│ └─ package.json
│
├─ frontend/ # React frontend
│ ├─ src/
│ │ ├─ Pages/ # React pages (Home, Login, Register, Avatar)
│ │ ├─ components/ # Reusable React components
│ │ ├─ utils/ # Helper functions and API endpoints (ApiRequest.js)
│ │ └─ index.js
│ └─ package.json
│
├─ .env # Environment variables (backend)
└─ README.md

## Installation and Setup

### Backend

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Create a `.env` file with the following variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4.  Start the backend server:
    ```bash
    npm run dev
    ```
    The backend server will start on the specified port (default 5000).

### Frontend

1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the frontend development server:
    ```bash
    npm start
    ```
    The React app will start, typically on port 3000. If the port is in use, it will prompt to use another port (e.g., 3001).

---

## API Endpoints

| Feature | Endpoint | Method |
| :--- | :--- | :--- |
| Register | `/api/auth/register` | `POST` |
| Login | `/api/auth/login` | `POST` |
| Set Avatar | `/api/auth/setAvatar/:userId` | `POST` |
| Add Transaction | `/api/v1/addTransaction` | `POST` |
| Get Transactions | `/api/v1/getTransaction` | `POST` |
| Edit Transaction | `/api/v1/updateTransaction/:id` | `PUT` |
| Delete Transaction | `/api/v1/deleteTransaction/:id` | `POST` |

**Note:** Replace `:userId` or `:id` with the actual user or transaction ID when making requests.

---

## Deployment

To make the app accessible online:

1.  **Push to GitHub:** Keep your latest code in a repository.
2.  **Deploy Backend on Render:** Connect your GitHub repository, configure environment variables, and deploy the server.
3.  **Deploy Frontend on Netlify/Vercel:** Connect your GitHub repository and deploy the frontend.
4.  **Update API URLs:** After deployment, update the `host` variable in `frontend/src/utils/ApiRequest.js` to point to your deployed backend URL.

---

## Why This Project Was Built

Smart Expense Tracker was created to provide a practical, real-world example of a full-stack application. It demonstrates how to:

-   Implement user authentication with JWT.
-   Build CRUD operations for transaction management.
-   Connect a React frontend with an Express backend using Axios.
-   Work with MongoDB for storing and retrieving user data.
-   Handle frontend-backend integration and manage environment-specific configurations.

---

## Future Enhancements

-   Add AI-based spending suggestions and saving tips.
-   Include charts and graphs for visualizing expenses.
-   Support multiple currencies.
-   Implement notifications for exceeding budget limits.
