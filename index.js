import request from "./src/request.js";

const hrefRegexpattern = /href=\W(\/|http\w:\/\/)(\w+\W|\w+){1,}/gm;

// make a request to an endpoint
// get all matches from the endpoint;
// send a request to each endpoint
//      if response is a 400-599, the link is broken and should be returned

// parse urls into hostname and paths

function match(pattern, string) {
  return string.match(pattern);
}

async function d() {
  let { error, data } = await request.get("https://www.google.com");
  if (error !== null) {
    console.log(error);
  }

  let matches = match(hrefRegexpattern, data);
  console.log(matches);
  // if error log it
  // if data find matches
}

d();

// let myURL = new URL(
//   "https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/"
// // );
// console.log(myURL);
// technique number 1:
// ---> Promisify
