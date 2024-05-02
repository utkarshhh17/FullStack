# FullStack

## Description

The React Authentication App is a full-stack web application built with React.js, Node.js, Express.js, and MongoDB. It provides user authentication and authorization features, allowing users to sign up, log in, and access protected routes.

### Features

- **User Authentication**: Users can sign up with a valid email address and password, and log in to their accounts securely.
- **Protected Routes**: Certain routes are protected and can only be accessed by authenticated users.
- **Password Reset**: Users can request a password reset if they forget their password, and receive an email with instructions to reset it.
- **Email Verification**: New users must verify their email addresses before gaining access to the application.
- **Rate Limiting**: Rate limiting is implemented to protect against brute force attacks on login and password reset endpoints.
- **Middleware for Authentication and Authorization**: Middleware functions are used to authenticate and authorize user requests.
- **Unit Tests**: API endpoints are unit tested using Jest to ensure reliability and stability.
- **Social Login**: Users can sign up or log in using social login options provided by mock APIs and React libraries.
- **Password Visibility Toggle**: Users can toggle password visibility in the password input field for improved user experience.
- **Animations with Framer Motion**: Framer Motion is used to add animations and microinteractions to enhance the user experience.
- **Accessibility Features**: Alt text and keyboard navigation using ARIA attributes and focus management are included for improved accessibility.

## Installation

To install and run the React Authentication App locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-authentication-app.git
