const env = require('dotenv')
const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch');

// requiring files for routes
const item = require('./routes/item.js')
const search = require('./routes/search.js')
const filter = require('./routes/filter.js')
const categories = require('./routes/categories.js')
const seller = require('./routes/seller.js')

// start config environment 
env.config();

// declare app constant to use express and port
const app = express()
const port = process.env.PORT || 5000;

// app now use cors and json
app.use(cors())
app.use(express.json())


// declare base url from process env if doesn't exist set it default
const MELI_URL = process.env.MELI_URL || process.env.BASE_URL || 'http://localhost:5000'

app.get('/v1/', async (req, res) => {
    // try catch to process data from the api
    try {

        // declaring getResults to await the response of the api
        const getResults = await fetch(`${MELI_URL}sites/MLA/search?q=notebook`)
        // waiting and converting the data into a json object
        const response = await getResults.json()

        // check if response.results exist or lenght > 0 else return 404
        if (response.results && response.results.length > 0) {
            res.status(200).send(response)
        } else {
            res.status(404).send('Error, invalid search or not found')
        }

    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }

})

// setting to use routes with items 
app.use("/v1/item/", item);
app.use("/v1/search/", search);
app.use("/v1/filter/", filter);
app.use("/v1/categories/", categories);
app.use("/v1/seller/", seller);

// app listen port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})