const express = require('express');
const { everything } = require('./handlers/everything');
const { topHeadlines } = require('./handlers/top-headlines');

const app = express();
app.use(express.json());

app.get('/api/v1/top-headlines',topHeadlines) 
app.get('/api/v1/everything', everything)
app.get('/', (req, res) => {
    res.send('NOT ACCESSABLE')
})


app.listen('4000', () => {
    console.log('Backend server is running on 4000...')
})