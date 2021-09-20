const express = require('express');
const { everything } = require('./handlers/everything');
const { topHeadlines } = require('./handlers/top-headlines');
const path = require('path');


const app = express();
app.use(express.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get('/api/v1/top-headlines',topHeadlines) 
app.get('/api/v1/everything', everything)

// All other GET requests not handled before will return our React app
 app.get('*', (req, res) => {
     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
  

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is listening on ${port}...`)
})