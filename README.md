# TaskMinder - Task Management Application

TaskMinder is a task management application built using React and Express. It allows users to organize their tasks and boost productivity. This repository includes both the frontend and backend components of the application.


## Features

- User registration and login with authentication.
- User remain login for 1 hour
- Landing page showcasing the benefits of the app.
- Todo management for creating, updating, and deleting tasks.
- Backend API endpoints for handling user authentication and todo operations.
- Server side authentication and type checking
- Database maintained on MongoDB cloud

## Technologies Used

- Frontend:
  - React.js
  - React Router
  - CSS (Styling)
  - Axios (HTTP requests)
  - Javascript

- Backend:
  - Node.js
  - Express.js
  - MongoDB (Database)
  - Mongoose (ODM)
  - JWT (JSON Web Tokens) for authentication
  - Zod for server side type checking

## Getting Started

### Prerequisites

- Node.js: [Download and Install Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:
```
git clone https://github.com/his-maj-esty/Todo-App.git
```
2. Install backend dependencies:
```
cd ../server
npm install
```
3. Install frontend dependencies:
 ```
npm install
```

### API
The backend API provides the following endpoints:

- POST /todos/login: User login with authentication.
- POST /todos/signup: User registration.
- GET /todos/alltodos: Get all todos for an authenticated user.
- GET /todos/:id : Get a specific todo by ID.
- POST /todos/addtodo: Add a new todo.
- PUT /todos/:id : Update an existing todo.
- DELETE /todos/:id : Delete a todo.
Refer to the API code for more details on request payloads and responses.


### License
This project is licensed under the MIT License.

