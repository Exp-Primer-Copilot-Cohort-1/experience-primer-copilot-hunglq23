// Create web server
// Use the comments.js module to handle comments
var http = require('http');
var comments = require('./comments');
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    comments.add('Hello');
    comments.add('World');
    comments.show(response);
});
server.listen(8000);
console.log('Server running at http://localhost:8000/');
// Use the skills.js module to handle skills
var skills = require('./skills');
skills.calculateNumbers(10, 5);
// Use the member.js module to handle member
var member = require('./member');
member.skillsMember().greet();
// Use the comments.js module to handle comments
var comments = require('./comments');
comments.add('Hello');
comments.add('World');
comments.show();
// Use the skills.js module to handle skills
var skills = require('./skills');
skills.calculateNumbers(10, 5);
// Use the member.js module to handle member
var member = require('./member');
var memberObj = member.skillsMember();
console.log('Name: ' + memberObj.name);
console.log('Age: ' + memberObj.age);
console.log('Skills: ' + memberObj.skills.join(', '));
memberObj.greet();
// Use the comments.js module to handle comments
var comments = require('./comments');
comments.add('Hello');
comments.add('World');
comments.show();
// Use the skills.js module to handle skills
var skills = require('./skills');
skills.calculateNumbers(10, 5);
// Use the member.js module to handle member
var member = require('./member');
var memberObj = member.skillsMember();
console.log('Name: ' + memberObj.name);
console.log('Age: ' + memberObj.age);
console.log('Skills: ' + memberObj.skills.join(', '));
memberObj.greet();
// Use the comments.js module to handle comments
var comments = require('./comments');
comments.add('Hello');
comments.add('World');
comments.show();
// Use the skills.js module to handle skills
var skills = require('./skills');
skills.calculateNumbers(10, 5);
// Use the member.js module to handle member
var member = require('./member');
var memberObj = member.skillsMember();
console.log('Name: ' + memberObj.name);
console.log('Age: ' + memberObj.age);
console.log('Skills: ' + memberObj.skills.join(', '));
memberObj.greet();
// Use the comments.js module to handle comments
var comments = require('./comments');
comments.add('Hello');
comments.add('World');
comments.show();
// Use the skills.js module to handle skills
var skills = require('./skills');
skills.calculateNumbers(10, 5);
// Use the member.js module to handle member
var member = require('./member');
var memberObj = member