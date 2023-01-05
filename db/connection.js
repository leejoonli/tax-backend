require('dotenv').config();
const mongoose = require('mongoose');

// Create a .env file and paste your DATABASE_URL in it to connect your MongoDB Atlas database
// Remember to restart your server if needed
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

mongoose
	.connect(mongoURI)
	.then((conn) => {
		console.log(
			`connected to mongoDB atlas on ${conn.connections[0].name} database. 🐶`
		);
	})
	.catch((err) => {
		console.error(err);
	});

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Open the Connection
db.on('open', () => {
	console.log('✅ mongo connection made!');
});

module.exports = mongoose;
