// Config
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 8000);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Redirect
app.get('/', (req, res) => {
    res.redirect('/api/');
});

// ADD CONTROLLERS
// REF booke
//const ordersController = require('./controllers/ordersController');

//app.use('/api/orders', ordersController);

// END CONTROLLERS
// REF booke
app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).send(message);
});

// Start Server
app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`);
});