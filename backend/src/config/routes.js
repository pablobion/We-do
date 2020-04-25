const express = require('express')


module.exports = (server) => {

    //API Routes

    const router = express.Router()
    server.use('/api', router)

    //  Routes
    const wedoService = require('../api/wedo/wedoService')
    const cardsService = require('../api/cards/cardsService')


    wedoService.register(router, '/wedos')
    cardsService.register(router, '/cards')

}