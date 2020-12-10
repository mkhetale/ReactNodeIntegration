

const express = require('express');
const mongoose = require('mongoose');
const { User } = require('./model/user');

const app = express();
<<<<<<< HEAD
const cors = require('cors');

app.use(cors());
=======
>>>>>>> e84f58b845303df8c21103af14104888ffae176d

app.use(express.json());

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
const connection = mongoose.connection;
connection.on('error', () => console.log('DB error'));
connection.once('open', () => console.log('DB is up'));



app.post('/contact', async (request, response) => {
	const { email, query } = request.body;
	User.findOne({email: email})
	.then( (user) => {
<<<<<<< HEAD
=======
		console.log(user, 'user');
>>>>>>> e84f58b845303df8c21103af14104888ffae176d
		if (query) {
			user.query.push(query);
			User.update({email: email}, { $set: {query: user.query} }, function(err, res) {
				if (err) throw err;
<<<<<<< HEAD
=======
				console.log("1 query updated");
>>>>>>> e84f58b845303df8c21103af14104888ffae176d
				return response.send('Success');
			});
		}
	})
	.catch(() => {
		const user =  User.create({ email, query});
<<<<<<< HEAD
    	return response.send('Success');
	});
});
app.listen(5000, () => console.log('Server is up'));
=======
    return response.send('Success');
	});
	// console.log(exist, 'eds');
	// if (!exist) {
	// 	const user = await User.create({ email, query});
  //   return response.send(user);
	// }
});
// app.post('/test', async (request, response) => {
//     const { email, query } = request.body;
//     console.log(email);
//     console.log(query);
//     const user = await User.create({ email, query});

//     return response.send(user);
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.listen(5003, () => console.log('Server is up'));
>>>>>>> e84f58b845303df8c21103af14104888ffae176d
