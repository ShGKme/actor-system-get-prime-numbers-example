const express = require('express')
const { createActor, actorSystem } = require('./actorSystem')

class Server{

    static async init() {
        Server.port = 4000;
        Server.actor = await createActor()
        Server.actorSystem = actorSystem

        Server.app = express()
        Server.app.get('/weather', Server.getWeather)
        Server.app.get('/prime', Server.getPrime)

        return Server.app.listen(Server.port)
    }

    static async getWeather(req, res) {
        const reply = await Server.actor.sendAndReceive('getCurrenWheather', req.query.city)
        res.status(200).send(reply)
    }

    static async getPrime(req, res) {
        const reply = await Server.actor.sendAndReceive('getPrime', req.query.num)
        res.status(200).send(reply.toString())
    }
}

Server.init().then(() => {
    console.log(`Server is running on http://localhost:${Server.port}`)
})