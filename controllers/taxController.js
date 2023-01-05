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
router.post('/', async(req,res,rext) => {
    try {
        // create new Tax
        const newTax = await Tax.create(req.body);
        // send response in JSON and status code 201
        res.status(201).json(newTax);
    } catch(err) {
        next(err);
    }
});

// PUT

// PATCH

// DELETE

// export
module.exports = router;