//Homework 2 Node.js
//Tim Leikam
//Postman collection link: https://www.getpostman.com/collections/67ee9ec57f657a71d5cd

var express = require("express");
var url = require("url");
var http = require("http");
var app = express();

//Handle /gets path
app.all('/gets', function(req, res) {
	//Check if the method was GET
	if(req.method == "GET") {
		//Will hold the queries and headers the user submitted
		var results = [];	
		
		//Check the queries first
		results.push("Queries:");
		if(url.parse(req.url).search == null) {
			//No queries submitted
			results.push("No queries were submitted.");
		}
		else {
			//Queries submitted, push the results
			results.push(req.query);
		}
		
		//Check the headers second
		results.push("Headers:");
		if(req.headers == null) {
			//This should never show, since automatically generated
			//headers are always created/sent
			results.push("No headers were submitted.");
		}
		else {
			//Push the headers, including automatically generated
			//ones
			results.push(req.headers);
		}
		
		//Send the results
		res.status(200);
		res.send(results);
	}
	
	//Deny all other requests on /gets
	else {
		res.status(400);
		res.send("This method is not accepted on /gets.");
	}
})

//Handle /posts path
app.all('/posts', function(req, res) {
	//Check if the method was POST
	if(req.method == "POST") {
		//Will hold the queries and headers the user submitted
		var results = [];	
		
		//Check the queries first
		results.push("Queries:");
		if(url.parse(req.url).search == null) {
			//No queries submitted
			results.push("No queries were submitted.");
		}
		else {
			//Queries submitted, push the results
			results.push(req.query);
		}
		
		//Check the headers second
		results.push("Headers:");
		if(req.headers == null) {
			//This should never show, since automatically generated
			//headers are always created/sent
			results.push("No headers were submitted.");
		}
		else {
			//Push the headers, including automatically generated
			//ones
			results.push(req.headers);
		}
		
		//Send the results
		res.status(200);
		res.send(results);
	}
	
	//Deny all other requests on /posts
	else {
		res.status(400);
		res.send("This method is not accepted on /posts.");
	}
})

//Handle /puts path
app.all('/puts', function(req, res) {
	//Check if the method was PUT
	if(req.method == "PUT") {
		//Will hold the queries and headers the user submitted
		var results = [];	
		
		//Check the queries first
		results.push("Queries:");
		if(url.parse(req.url).search == null) {
			//No queries submitted
			results.push("No queries were submitted.");
		}
		else {
			//Queries submitted, push the results
			results.push(req.query);
		}
		
		//Check the headers second
		results.push("Headers:");
		if(req.headers == null) {
			//This should never show, since automatically generated
			//headers are always created/sent
			results.push("No headers were submitted.");
		}
		else {
			//Push the headers, including automatically generated
			//ones
			results.push(req.headers);
		}
		
		//Send the results
		res.status(200);
		res.send(results);
	}
	
	//Deny all other requests on /puts
	else {
		res.status(400);
		res.send("This method is not accepted on /puts.");
	}
})

//Handle /deletes path
app.all('/deletes', function(req, res) {
	//Check if the method was DELETE
	if(req.method == "DELETE") {
		//Will hold the queries and headers the user submitted
		var results = [];	
		
		//Check the queries first
		results.push("Queries:");
		if(url.parse(req.url).search == null) {
			//No queries submitted
			results.push("No queries were submitted.");
		}
		else {
			//Queries submitted, push the results
			results.push(req.query);
		}
		
		//Check the headers second
		results.push("Headers:");
		if(req.headers == null) {
			//This should never show, since automatically generated
			//headers are always created/sent
			results.push("No headers were submitted.");
		}
		else {
			//Push the headers, including automatically generated
			//ones
			results.push(req.headers);
		}
		
		//Send the results
		res.status(200);
		res.send(results);
	}
	
	//Deny all other requests on /deletes
	else {
		res.status(400);
		res.send("This method is not accepted on /deletes.");
	}
})

//Handle / path
app.all('/', function(req, res) {
	//Deny all other requests on /
	res.status(400);
	res.send("No requests are accepted on /.");
})

app.listen(1337, function() {
	console.log("Server is running at 127.0.0.1:1337");
})