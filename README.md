# OpenDevin

## Project Description

OpenDevin is a simple web application built using React. The primary function of the application is to provide a user interface with two main components: a home page and an agent framework.

## Features

- Home Page with a welcome message and navigation button
- Agent Framework with a step-based interface

## Technologies

- React
- React Router
- Tailwind CSS

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install react react-dom react-router-dom --timeout=600000
   npm install -D tailwindcss postcss autoprefixer eslint eslint-config-prettier eslint-plugin-prettier @babel/plugin-proposal-private-property-in-object
   ```
3. Initialize Tailwind CSS Configuration:
   ```bash
   npx tailwindcss init -p
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Additional Configuration

- Ensure that the `tailwind.config.js` file is set up correctly to include your source files.
- Create a `.gitignore` file to exclude unnecessary files:
  ```
  node_modules
  dist
  .env
  ```
- Set up ESLint and Prettier for code quality:
  ```bash
  npm install -D eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier
  ```
- Create ESLint configuration file `.eslintrc.json`:
  ```json
  {
    "extends": ["react-app", "plugin:react/recommended", "prettier"],
    "plugins": ["react", "prettier"],
    "rules": {
      "prettier/prettier": ["error"]
    }
  }
  ```
- Create Prettier configuration file `prettier.config.js`:
  ```javascript
  module.exports = {
    singleQuote: true,
    trailingComma: 'all',
  };
  ```

## Running the Application

To verify that the setup is complete and the application is running, execute:

```bash
npm start
```
