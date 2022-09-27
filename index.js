const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')
const members = require('./db/Members')


const { request } = require('http');

const app = express();


// Init middleware
app.use(logger);

// Gets All Members
app.get('/api/members', (req, res) => {
    res.json(members)
})

// Get single member
app.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id == req.params.id);

    if (found) {
        res.json(members.filter(member => member.id == req.params.id))
    } else {
        res.status(400).json({ msg: `No member with id of ${req.params.id}` })
    }
})

//static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('./api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
