const Tax = require('../models/tax');

const orderSeeds = require('./seed.json');

Tax.deleteMany({})
    .then(()=>{
        console.log("deleted all taxes");
    })
    .then(()=>{
        return Tax.insertMany(orderSeeds);
    })
    .then((newTaxes)=>{
        console.log('created new taxes', newTaxes);
    })
    .catch(console.error)
    .finally(()=>{
        process.exit;
    });