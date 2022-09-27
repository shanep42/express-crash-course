const express = require('express');
const router = express.Router();
const members = require('../../db/Members')

// Gets All Members
router.get('/', (req, res) => {
    res.json(members)
})

// Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id == req.params.id);

    if (found) {
        res.json(members.filter(member => member.id == req.params.id))
    } else {
        res.status(400).json({ msg: `No member with id of ${req.params.id}` })
    }
})



module.exports = router