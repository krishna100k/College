const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Set EJS as the view engine

// Define a sample data array
const data = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' }
];

// Route to render the EJS template with data
app.get('/', (req, res) => {
    res.render('index', { singleVariable: 'Hello, World!', data: data });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});
