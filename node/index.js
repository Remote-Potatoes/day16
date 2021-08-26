// const { arrow } = require("./arrow");

// // const { arrow } = require("./arrow");
// console.log("arrow:", arrow());

// // const anotherExample = require("./arrow")
// console.log("Hello world, from the terminal");

// const hello = "somethingo";

// class TearsForFears {
//   constructor(name) {
//     this.name = name;
//   }

//   rule() {
//     return `Everybody wants the rule the world`;
//   }
// }

// const band = new TearsForFears(`Band`);

// console.log(band.rule());

// Package Manager:
// A package manager : Node Package Manager

// const chalk = require("chalk");
// const superheroes = require("superheroes");

// console.log(chalk.red.bgWhite("Hello"));

// console.log(` ${chalk.bgYellowBright.greenBright(superheroes.random())} `);

// MERN Stack
// M -> MongoDb
// E -> ExpressJs
// R -> React
// N -> Nodejs

// const http = require("http") ->  require("this is external code")
// inside the parens i have no path "./somehitng", what i have is just quotes and a word -> node package
// whatever we are getting from the http package, we are assigning to the variable http
const http = require("http");
const fs = require("fs");

// const server we are assigning to whatever http.createServer returns
// create server expects a function in its definition. The function has two arguments. And those arguments are THE PILLARS OF THE INTERNET -> Request and Response
// The Request holds all of the data that was sent by the client, which browser, which ip, which url is asking, everything. Headers, cookies, if you can think about it, it probably has it
// The Response has the responsability to know how to send back to the client, the resources that are being asked.
const server = http.createServer((request, response) => {
  console.log("request:", request.method, request.url);

  //   if the request is being done to the home page: home page === "/"
  if (request.url === "/") {
    //   write to our response HTML -> i want to, when you get to the client, take the browser, and write the following html
    response.write("<h1>Hey now, hey now</h1>");
    // after that, do nothing else. just end the connection
    response.end();
    return;
  }
  //   if the request is being done to the about page: about page !== always, but because we want to, is in "/about"
  if (request.url === "/about") {
    //   write to our response HTML
    response.write("<h1>You;re in the about page, to meeee</h1>");
    // end the handshake
    response.end();
    return;
  }

  //   because we dont have anything looking for anything else specific in terms of url, this is going to be the default response for every other request, always
  response.write(`<h1>This page does not exist ${request.url}</h1>`);
  response.end();
});

server.listen(5000, () => {
  console.log(`Listening`);
});

/* HTTP VERBS
Navigate to a page: ALWAYS GET
Everytime yousubmit somting: ALWAYS POST
 */
