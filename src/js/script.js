var adminPage = require('../tmpl/admin.html');
var auth = require('./auth.js');
var buildForms = require('./formBuilder.js');
var Handlebars = require('handlebars');
var users = require('./users.js');

buildForms.createLoginForm();


var usersList = users.getUsers();
console.log(usersList);
var template = Handlebars.compile(adminPage);

// var main = adminPage.getElementById('parent');
console.log(adminPage);

// document.getElementById("adminPage").contentDocument.getElementById("usersTable").innerHTML = template(usersList);



