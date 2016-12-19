var adminPage = require('../tmpl/admin.html');
var auth = require('./auth.js');
var buildForms = require('./formBuilder.js');
var Handlebars = require('handlebars');

buildForms.createLoginForm();





/*function renderPage(page) {
	var user = userService.getUser();
	var users = userService.getAll();
	var pageContainer = document.getElementById('page');
	var template = pages[page].template;

	var readyTmpl = Handlebars.compile(template);

	if (page === 'admin') {
		pageContainer.innerHTML = readyTmpl({
			users: users
		});
	} else {
		pageContainer.innerHTML = readyTmpl(user);
	}
*/	// console.log(adminPage);

	// document.getElementById("adminPage").contentDocument.getElementById("usersTable").innerHTML = template(usersList);