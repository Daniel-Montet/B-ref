const https = require("https");


// write a test for this using Jest
function Request() {
    const error = null;
    const str = null;

    async function data() {
        return { data:data, error: error };
    }

    function callback(response) {
        response.on("data", (chunk) => {
            str += chunk;
        });

        response.on("end",()=> {
            console.log("End of response");
        });

        response.end();
    };

    function init(options) {
        const req = https.request(options, callback);
        req.on("error", err =>{
            error = err;
            console.log(error);
        })
    
        req.end();
    }

    return {
        data: data,
        init: init
    }
}

module.exports = Request()