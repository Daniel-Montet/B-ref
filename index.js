const http = require('https')
const options = {
  hostname: 'koajs.com',
  port: 443,
  path: '/',
  method: 'GET'
}

let str = "";

let responseListener = (response) => {
    response.on("data", (chunk) => {
        str += chunk;
    });

    response.on("end", ()=> {
        //fire eent to notify me that the data stream has completed
        console.log(str);
        console.log('No more data in response.');
    });

    response.on("error",(error) => {
        console.error(error);
    });
}



const request = http.request(options, responseListener);
request.end();