const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render(`main`)
})

router.get('/heart', (req, res) => {

    res.render(`other${req.url}`)
})

router.get('/cube', (req, res) => {
    res.render(`other${req.url}`)
})

router.get('/color', (req, res) => {
    res.render(`other${req.url}`)
})

router.get('/countdown', (req, res) => {
    res.render(`other${req.url}`)
})

router.get('/anime', (req, res) => {
    res.render(`other${req.url}`)
})

const socials = {
    instagram: `https://twitch.tv/lechixy/`,
    twitch: `https://instagram.com/lechixy/`,
    steam: `https://steamcommunity.com/id/lechixy/`,
    spotify: `https://open.spotify.com/user/31frempzaphgs26vlu4nn7tpagki?si=43cbe71dd7aa45db`,
    github: `https://github.com/Lechixy`,
    discord: `https://discord.com/oauth2/authorize?client_id=753906874729889853&permissions=8&scope=bot%20applications.commands`
}

router.get('/redirect', (req, res) => {

    if(!req.query.app) return res.render('errors/400')

    let app = socials[req.query.app]
    console.log(`redirecting to ${req.query.app}`)
    res.redirect(app)
})

module.exports = router;