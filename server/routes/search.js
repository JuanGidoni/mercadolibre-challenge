const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const env = require('dotenv');

// start config environment 
env.config();

// declare base url from process env if doesn't exist set it default
const MELI_URL = process.env.MELI_URL || process.env.BASE_URL || 'http://localhost:5000'

router.get('/:search', async (req, res) => {
    // try catch to process data from the api
    try {
        // declare search parameter from req
        const search = req.params.search

        // declaring getResults to await the response of the api
        const getResults = await fetch(`${MELI_URL}/search?q=${search}`)

        // waiting and converting the data into a json object
        const response = await getResults.json()

        // check if response.results exist or lenght > 0 else return 404
        if (response.results && response.results.length > 0) {
            res.status(200).send(response.results)
        } else {
            res.status(404).send('Error, invalid search or not found')
        }

    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }

})

module.exports = router;