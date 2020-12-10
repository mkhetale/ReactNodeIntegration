

const express = require('express');
const mongoose = require('mongoose');
const { User } = require('./model/user');

const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
const connection = mongoose.connection;
connection.on('error', () => console.log('DB error'));
connection.once('open', () => console.log('DB is up'));



app.post('/contact', async (request, response) => {
	const { email, query } = request.body;
	User.findOne({email: email})
	.then( (user) => {
		if (query) {
			user.query.push(query);
			User.update({email: email}, { $set: {query: user.query} }, function(err, res) {
				if (err) throw err;
				return response.send('Success');
			});
		}
	})
	.catch(() => {
		const user =  User.create({ email, query});
    	return response.send('Success');
	});
});
app.listen(5000, () => console.log('Server is up'));