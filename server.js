const express = require('express');
const app = express();
const port = 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check if username and password match the allowed credentials
  if (username === 'Yoshi' && password === 'Avi123') {
    res.json({ success: true, redirect: '/home.html' });
  } else {
    res.json({ success: false, message: 'Invalid username or password' });
  }
});

app.post('/forgot-password', (req, res) => {
  const email = req.body.email;

  // Perform email validation and processing
  if (email === 'yoshani.avishka16@gmail.com') {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Invalid email address' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
