var users = require('./users.js');
var render = require('./pageRender.js');
var Handlebars = require('handlebars');
var adminPage = require('../tmpl/admin.html');
var profile = require('../tmpl/userProfile.html');


var auth = {
	validateCredentials: function(event) {
		event.preventDefault(); //prevent page from reloading
		var login = document.getElementById("login").value;
		var pass = document.getElementById("pass").value;

		if (login != null && login != undefined && pass != null && pass != undefined) {
			var user = validateLogin(login);
			if (user !== null) {
				validatePass(user, pass);
			} else {
				validateFail();
			}
		}
	}
};

function validateLogin(login) {
	var usersList = users.getUsers();
	var user = null;
	for (var i = 0; i < usersList.length; i++) {
		if (login === usersList[i].name) {
			user = usersList[i];
			break;
		}
	}
	return user;
}

function validatePass(user, pass) {
	if (pass === user.pass) {
		validateSuccess(user);
	} else {
		validateFail();
	}
}

function validateFail() {
	alert("Problems during logging in. Try again");
	document.getElementById("login").value = "";
	document.getElementById("pass").value = "";
}

function validateSuccess(user) {
	if (user.group === 'admin') {
		var template = Handlebars.compile(render.config[user.group].template);
		var data = {
			name: user.name,
			lastVisit: user.lastVisit
		};
		data.usersList = render.usersList;
		render.main.innerHTML = template(data);
		window.location.href="#admin.html";
	} else if (user.group === 'client') {
		var template = Handlebars.compile(render.config[user.group].template);
		render.main.innerHTML = template(user);
		window.location.href="#userProfile.html";
	}
}


module.exports = auth;