const http = require("https");
const options = {
  hostname: "www.jumia.co.ke",
  port: 443,
  path: "/",
  method: "GET",
};

let str = "";

let responseListener = (response) => {
  response.on("data", (chunk) => {
    str += chunk;
  });

  response.on("end", () => {
    getHrefs(str);
    console.log("No more data in response.");
  });

  response.on("error", (error) => {
    console.error(error);
  });
};

const request = http.request(options, responseListener);
request.end();

function getHrefs(chunk) {
  let hrefExpression = /\bhref/;
  console.log(chunk.match(hrefExpression));
}
