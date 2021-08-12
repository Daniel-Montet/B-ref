const https = require('https')
const options = {
  hostname: 'koajs.com',
  port: 443,
  path: '/',
  method: 'GET'
}


let callback = (response) => {
    let str = "";

    response.on("data", (chunk) => {
        str += chunk;
    });

    response.on("end", ()=> {
        return str;
    });

    response.on("error",(error) => {
        console.error(error);
    })

    
}

https.request(options, callback).end();
console.log(data);