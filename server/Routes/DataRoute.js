const { AddReading, Readings} = require('../Controllers/DataController')
const {userVerification} = require('../Middlewares/AuthMiddleware')
const router = require('express').Router()

router.post('/addreading', AddReading)
router.post('/readings', Readings)
router.post('/',userVerification)

module.exports = router