# Secrets Web Application

Welcome to the Secrets Web Application, a digital sanctuary for sharing and exploring anonymous secrets. This innovative platform, crafted with the latest technologies including Node.js, Express, MongoDB, and EJS, ensures a seamless and secure user experience. Dive into a world where users can express their innermost thoughts anonymously, fostering a community built on trust and confidentiality. Uncover the power of shared secrets in an environment designed for simplicity, anonymity, and connection.

## Key Features

- **User Registration:** Sign up with a valid email and password to create your account.
- **User Login:** Existing users can log in securely with their credentials.
- **Submit Your Secrets:** Share your thoughts anonymously by submitting secrets.
- **View Your Secrets:** After logging in, see your latest secret and its creation date.
- **Dark Mode:** Enhance your experience with a sleek and user-friendly dark mode.
- **CSS Styling:** The frontend is styled using CSS for an appealing visual presentation.
- **EJS Partials:** Utilizes EJS partials for efficient code reuse in the views.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js
- MongoDB Atlas account (for the remote database)
- npm (Node Package Manager)

---

## Installation Steps

1. Clone the repository:

   ```bash
   git clone <https://github.com/csgaikwad/Secrets-Web.git>
   cd Secrets-web

# Install dependencies
```
npm install
```

# Set up MongoDB:
 - Create a MongoDB Atlas account.
 - Replace the connection string in app.js with your MongoDB Atlas connection string.

# Run the application
``` node app.js ```

The application will be accessible at http://localhost:3000.

## Usage
1. Open your browser and go to http://localhost:3000.
2. Register a new account or login if you already have one.
3. Submit your secrets.
4. View your latest secret on the home page.

## File Structure
- `public`: Contains static files (CSS styles).
- `views`: Contains EJS templates and partials.
- `app.js`: Main application file.

## Dependencies
- Express
- Mongoose
- Body-parser
- EJS
The application will be accessible at http://localhost:3000.

## Additional Notes
- Make sure to keep sensitive information like database credentials secure.
- Customize the application further based on your requirements.

## Contributing
*Feel free to contribute to the project by opening issues or submitting pull requests.*
🚀
