var Handlebars = require('handlebars');
var users = require('./users.js');
var adminPage = require('../tmpl/admin.html');
var profile = require('../tmpl/userProfile.html');

var main = document.getElementById('page');
var usersList = users.getUsers();

var config = {
	admin: {
		template: adminPage,
		controller: function(){

		}
	},
	client:{
		template: profile,
		controller: function(){}
	}
};

module.exports = {config, main, usersList};



