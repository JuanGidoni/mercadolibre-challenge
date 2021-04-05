const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const env = require('dotenv');

// start config environment 
env.config();

// declare base url from process env if doesn't exist set it default
const MELI_URL = process.env.MELI_URL || process.env.BASE_URL || 'localhost:5000'

router.get('/', async (req, res) => {
    // try catch to process data from the api
    try {
        // declare empty array to be filled with data after filtering
        let itemToReturn = []

        // declaring getData to await the response of the api
        const getData = await fetch(`${MELI_URL}sites/MLA/categories`)
        
        // waiting and converting the data into a json object
        const response = await getData.json()
        
        // check if response.results exist or lenght > 0 else return 404
        if(response && response.length > 0){ 
            res.status(200).send(response)
        }else{
            res.status(404).send('Error, categories empty or not found')
        }
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router;