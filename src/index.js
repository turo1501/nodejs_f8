const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars'); // Destructure engine function

const app = express();
const port = 3000;

//static file 
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({extname: '.hbs'})); // Use the destructured engine function
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
