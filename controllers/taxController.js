// require express module
const express = require('express');

// instantiate the router
const router = express.Router();

// import Tax model
const Tax = require('../models/Tax');

// ROUTES

// GET, index
router.get('/', async (req, res, next) => {
    try {
        // get all orders
        const tax = await Tax.find({});
        // send response in JSON
        res.json(tax);
    } catch(err) {
        next(err);
    }
});

// GET, single

// POST

// PUT

// PATCH

// DELETE

// export
module.exports = router;