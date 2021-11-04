const http = require('http')
const express = require('express')

const app = express()
const port = process.env.PORT || 7373

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port} on port ` + port)
})