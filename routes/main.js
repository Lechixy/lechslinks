const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

const socials = {
    instagram: `https://twitch.tv/lechixy/`,
    twitch: `https://instagram.com/lechixy/`,
    steam: `https://steamcommunity.com/id/lechixy/`,
    spotify: `https://open.spotify.com/user/31frempzaphgs26vlu4nn7tpagki?si=43cbe71dd7aa45db`,
    github: `https://github.com/Lechixy`,
    discord: `https://discord.com/oauth2/authorize?client_id=753906874729889853&permissions=8&scope=bot%20applications.commands`
}

router.get('/send', (req, res) => {

    
    if(!req.query.app) return res.send('Need an app to redirect')

    res.redirect(`${socials[`${req.query.app}`]}`)
})



module.exports = router;