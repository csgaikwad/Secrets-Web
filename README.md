# Secrets Web Application

Welcome to the Secrets Web Application, a digital sanctuary for sharing and exploring anonymous secrets. This innovative platform, crafted with the latest technologies including Node.js, Express, MongoDB, and EJS, ensures a seamless and secure user experience. Dive into a world where users can express their innermost thoughts anonymously, fostering a community built on trust and confidentiality. Uncover the power of shared secrets in an environment designed for simplicity, anonymity, and connection.

## Key Features

1. **User Registration:**
   - Sign up with a valid email and password to create your account.

2. **User Login:**
   - Existing users can log in securely with their credentials.

3. **Submit Your Secrets:**
   - Share your thoughts anonymously by submitting secrets.

4. **View Your Secrets:**
   - After logging in, effortlessly access your latest secret along with its creation date.

5. **Dark Mode:**
   - Enhance your experience with a sleek and user-friendly dark mode.

6. **CSS Styling:**
   - Elevate the visual appeal with carefully crafted CSS styles for the frontend.

7. **EJS Partials:**
   - Optimize code organization and reusability using EJS partials in the views.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js
- MongoDB Atlas account (for the remote database)
- npm (Node Package Manager)

---

## Installation Steps

- Clone the repository:

   ```bash
   git clone <https://github.com/csgaikwad/Secrets-Web.git>
   cd Secrets-web
   ```

- Install dependencies

   ```js
   npm install
   ```

- Set up MongoDB:
 - Create a MongoDB Atlas account.
 - Replace the connection string in app.js with your MongoDB Atlas connection string.

- Run the application
   ```bash
   node app.js
   or
   nodemon app.js
   ```

*The application will be accessible at http://localhost:3000.*

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
