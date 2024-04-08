// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of Express
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define API endpoints
// Example endpoint for getting book reviews
app.get('/api/book-reviews', (req, res) => {
    // Logic for fetching book reviews from the database
    // Dummy response for demonstration
    const bookReviews = [
        { title: 'Book 1', author: 'Author 1', rating: 4 },
        { title: 'Book 2', author: 'Author 2', rating: 5 },
        { title: 'Book 3', author: 'Author 3', rating: 3 }
    ];
    res.json(bookReviews);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const doLogin = function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    login({
      username: username,
      password: password
    }).then(function(res) {
      window.location.href = 'home.html';
    });
  };
  
  const doRegister = function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    register({
      username: username,
      email: email,
      password: password
    }).then(function(res) {
      window.location.href = 'home.html';
    });
  };
  
  const doLogout = function(e) {
    e.preventDefault();
  };
