const express = require('express');
const router = express.Router();
const needle = require('needle');

const API_MARKET_URL = process.env.API_MARKET_URL;
const API_CURRENCY_NAME = process.env.API_CURRENCY_NAME;
const API_CURRENCY_VALUE = process.env.API_CURRENCY_VALUE;

router.get("/", async(req, res) => {
    
try {
        const params = new URLSearchParams({
          [API_CURRENCY_NAME]: API_CURRENCY_VALUE,
        });
        const apiResponse = await needle(
          "get",
          `${API_MARKET_URL}?${params}`,
        );
        const data = apiResponse.body;

        res.status(200).json(data);
} catch (error) {
    res.status(500).json({ error });
}

});

module.exports = router;