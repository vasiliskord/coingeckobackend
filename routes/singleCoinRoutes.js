const express = require("express");
const router = express.Router();
const needle = require("needle");


const API_COIN_URL = process.env.API_COIN_URL;

router.get("/:id", async (req, res) => {
  try {
    const apiResponse = await needle("get", `${API_COIN_URL}/${req.params.id}`);
    const data = apiResponse.body;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
