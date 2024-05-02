# FullStack

## Description

The React Authentication App is a full-stack web application built with React.js, Node.js, Express.js, and MongoDB. It provides user authentication and authorization features, allowing users to sign up, log in, and access protected routes.


### Technology Stack

- **Node.js and npm**: Server-side JavaScript runtime and package manager.
- **Express.js**: Web application framework for Node.js used to build the backend server.
- **MongoDB**: NoSQL database used to store user data and posts.
- **jsonwebtoken**: Library for generating and validating JSON Web Tokens (JWT) for user authentication.
- **React.js**: JavaScript library used for building user interfaces and components.


## Features

- **Signup Screen**: Allows users to register with a unique username, email, and password. Validates input fields and email format. Includes optional fields like name and profile picture. Requires acceptance of terms and conditions. Provides clear error and success messages. Simulates sending a welcome email notification upon successful signup. Redirects to the post list screen after signup.

- **Post List Screen**: Implements infinite scrolling for browsing posts. Fetches posts data using paginated GET API endpoints. Responsive design using Tailwind CSS. Consistent with the "MelodyVerse" theme.

### API Endpoints

- **POST /signup**: Registers a new user with provided username, email, and password. Validates input, ensures unique usernames and emails, and securely hashes passwords. Returns a success message and JWT token upon successful registration.
- **GET /posts**: Paginated implementation for fetching posts data from the database. Secure endpoint that rejects unauthorized requests.

### JWT Implementation

- Generates JWT tokens with appropriate payload and expiration time upon successful login.
- Validates JWT tokens in protected routes to ensure user authentication.
- Implements token refresh mechanisms for improved security.

## Installation

To install and run the React Authentication App locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/utkarshhh17/FullStack.git
