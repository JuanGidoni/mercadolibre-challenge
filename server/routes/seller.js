const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const env = require('dotenv');

// start config environment 
env.config();

// declare base url from process env if doesn't exist set it default
const MELI_URL = process.env.MELI_URL || process.env.BASE_URL || 'http://localhost:5000'

router.get('/:seller', async (req, res) => {
    // try catch to process data from the api
    try {
        // declare seller parameter from req
        const sellerID = req.params.seller

        // declaring getResults to await the response of the api
        const getResults = await fetch(`${MELI_URL}sites/MLA/search?seller_id=${sellerID}`)

        // waiting and converting the data into a json object
        const response = await getResults.json()

        // check if response.results exist or lenght > 0 else return 404
        if (response) {
            res.status(200).send(response.seller)
        } else {
            res.status(404).send('Error, invalid search or not found')
        }

    } catch (error) {
        res.status(404).send(error)
    }

})

module.exports = router;