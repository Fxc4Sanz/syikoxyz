__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/docs', (req, res) => {
	res.sendFile(__path + '/dashboard.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : 'Multi Prefix',
            namabot: 'ALPHA-BOT',
            namaowner: 'zeeoneofc',
            instagram: 'zeeoneofc',
            github : 'https:\/\/github.com\/zeeoneofc',
        }
    }
    res.json(config)
})

module.exports = router
