var {apk} = require("cobra_dl")
var router = require('express').Router(),
	fetch = require('node-fetch'),
	cheerio = require('cheerio'),
	{ checkApiKey } = require('./')

router.get('/', async(req, res) => {
	if (!req.query.url) return res.json({ code: 403, status: false, msg: 'Please input query: url' })
         
	apk(req.query.url).then(respon => res.json(respon[0])).catch(err => res.json(err))
})
module.exports = router
