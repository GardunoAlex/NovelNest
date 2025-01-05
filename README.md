Thanks for checking the page out!

Novelnest

Description

Novelnest is a Node.js-based project that allows users to add posts about books they have read. It utilizes Express.js for routing and API handling, Body-Parser for request parsing, and PostgreSQL (pg) for database management. The project is designed to provide a simple server-side application that can interact with a PostgreSQL database.

Features

Built with Node.js and Express.js for efficient server-side handling.

Supports parsing of incoming requests using Body-Parser.

Database integration with PostgreSQL using the pg package.

Users can create posts to share their thoughts and reviews about books.

Prerequisites

Before you can run this project, ensure you have the following installed on your machine:

Node.js (v14 or higher recommended)

npm (Node Package Manager, comes with Node.js)

PostgreSQL (for database support)

Installation

Clone the repository to your local machine:

git clone <repository-url>

Navigate to the project folder:

cd <project-folder>

Install the required dependencies:

npm install

Running the Application

Ensure your PostgreSQL database is running and configured correctly. Update the database connection settings in the code if necessary.

Start the application using Nodemon:

npx nodemon index.js

Open your browser or API client and interact with the server at http://localhost:<port> (replace <port> with the actual port number specified in your project).

Dependencies

The following npm packages are used in this project:

express: A fast, unopinionated, minimalist web framework for Node.js.

body-parser: Middleware to parse incoming request bodies.

pg: PostgreSQL client for Node.js to interact with your database.

Notes

Make sure to configure your PostgreSQL database with the correct schema and data as required by the project.

Adjust environment variables (if applicable) for database credentials and other configurations.
