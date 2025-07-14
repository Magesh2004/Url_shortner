const express = require('express')
const router = express.Router()

const catchAsync = require('../utils/catchAsync')
const url = require('../controllers/url')




router.post('/shorten',catchAsync(url.createUrl))

router.route('/shorten/:shUrl')
.get(catchAsync(url.FetchUrl))
.put(catchAsync(url.UpdateUrl))
.delete(catchAsync(url.DeleteUrl))

router.get('/shorten/:shUrl/stats',catchAsync(url.GetStats))

module.exports = router