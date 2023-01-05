const mongoose = require('../db/connection');

// schema
const TaxSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    tax: [
        {
            year: Number,
            taxesOwed: Number,
        }
    ],
});

// instantiate the model
const Tax = mongoose.model('Tax', TaxSchema);

// export
module.exports = Tax;