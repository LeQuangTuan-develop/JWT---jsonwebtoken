require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const verifyToken = require('./middleware/auth')

const app = express()
app.use(express.json())

// database

const posts = [
    {
        userId: 1,
        post: "post Quang Tuan"
    },
    {
        userId: 2,
        post: "post Loc"
    }
]

app.get('/posts', verifyToken, (req, res) => {
    res.json(posts.filter(post => post.userId === req.userId))
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})