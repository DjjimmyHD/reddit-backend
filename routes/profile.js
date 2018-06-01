// location to the database and the profile table
const express = require('express')
const router = express.Router()
const querries = require('../db/querries')

router.get("/", (request, response, next) => {
    querries.getProfiles().then(profiles => {
        response.json({ profiles })
    }).catch(next)
});

module.exports = router