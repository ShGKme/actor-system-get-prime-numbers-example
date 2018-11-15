const path = require('path')
const comedy = require('comedy')
const { ComputingActor } = require('./ComputingActor')

const actorSystem = comedy({
    config: path.resolve(__dirname, 'actors.config.json')
})

async function createActor() {
    const rootActor = await actorSystem.rootActor()
    const actor = await rootActor.createChild(ComputingActor)
    return actor;
}

module.exports.createActor = createActor;
module.exports.actorSystem = actorSystem;