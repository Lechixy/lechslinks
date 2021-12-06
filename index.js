const http = require('http')
const express = require('express')
const favicon = require('serve-favicon')

const app = express()
const port = process.env.PORT || 7373
const Main = require('./routes/main')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', Main)

app.use((req, res, next) => {
    res.status(404).render('errors/404')
})

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port} on port ` + port)
})