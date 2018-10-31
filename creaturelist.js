const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3001
const Joi = require('joi')
const db = require('monk')('mongodb://zigzbox:therebedagrons1@ds050087.mlab.com:50087/creature-list-5e')


app.post('/CreatureList', validateNewCreature, (req, res) => {
    const savedCreature = encounterCreator.insert(req.body)
    res.send(savedCreature)
})