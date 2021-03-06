var convertParams = require('./lib/handlers/user-create.js'),
	config = require('config'),
	mongoose = require('mongoose'),
	UserModel = require('./lib/models/user.js'),
	db = require('./lib/db.js');

convertParams.convertParamsToUser(
{
	id: 'TestOfTime',
	email: 'testoftime@time.now',
	role: 'admin',
	password: 'password',
	password2: 'password'
}, function(err, returned_user){
	if(err){
		console.log('Something went wrong, %s', err);
		console.log(err);
	} else {

		console.log('User returned: %s', returned_user);
		var user = new UserModel(returned_user);
		
		db.connect(function(err) {
			if (err) {
				console.log('Error connecting to database');
				if (callback) {
					callback(err);
				}
				return;
			}

			user.save(function (err, fluffy) {
				if (err) {
					console.error(err);
					return;
				}
				else {
					console.log('User created...');
					return;
				}
			});
		});
	}
});

/*
	{
		"id": "TestOfTimeAdminID2",
		"name": "admin2",
		"email": "testoftime2@time.now",
		"password": "password",
		"role": "admin"
	}
*/