const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const port = process.env.PORT || 3333
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.get('*', (req, res) => {
    res.status(404).json({ status: 404, message: 'Page not found' })
})

app.listen(port, () => {
    console.log('Listen on port ', port)
})