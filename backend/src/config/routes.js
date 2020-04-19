const express = require('express')


module.exports = (server) => {

    //API Routes

    const router = express.Router()
    server.use('/api', router)

    //  WEdo Routes
    const wedoService = require('../api/wedo/wedoService')
    wedoService.register(router, '/wedos')


}