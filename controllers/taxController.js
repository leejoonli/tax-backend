// require express module
const express = require('express');

// instantiate the router
const router = express.Router();

// import Tax model
const Tax = require('../models/tax.js');

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
router.get('/:id', async(req,res,next) => {
    try {
        const tax = await Tax.findById(req.params.id);
        if(tax) {
            res.json(tax);
        } else {
            res.sendStatus(404);
        }
    } catch(err) {
        next(err);
    }
});

// POST
router.post('/', async(req,res,next) => {
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
router.put('/:id', async(req,res,next) => {
    try {
        // find tax to update
        const updateTax = await Tax.findByIdAndUpdate(req.params.id, req.body, {new: true, overwrite: true});
        res.json(updateTax);
    } catch (err) {
        next(err);
    }
});

// PATCH
router.patch('/:id', async(req,res,next) => {
    try {
        const updateTax = await Tax.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
        res.json(updateTax);
    } catch(err) {
        next(err);
    }
});

// DELETE
router.delete('/:id', async(req,res,next) => {
    try {
        const deletedTax = await Tax.findByIdAndDelete(req.params.id);
        if(deletedTax) {
            res.json(deletedTax);
        } else {
            res.sendStatus(404);
        }
    } catch(err) {
        next(err);
    }
});

// export
module.exports = router;