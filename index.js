const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 7373
const Main = require('./routes/main')

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    next();
});
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', Main)

app.use((req, res, next) => {
    res.status(404).render('errors/404')
})

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port} on port ` + port)
})