const request = require("./request");

const hrefRegexpattern = /href=\W(\/|http\w:\/\/)(\w+\W|\w+){1,}/gm;

const options = {
    hostname: '',
    port: 443,
    path: "",
    method: "GET"
}

async function d() {
    let d = await request.data()
    console.log(d)
}

d()

// make a request to an endpoint
// get all matches from the endpoint;
// send a request to each endpoint
//      if response is a 400-599, the link is broken and should be returned