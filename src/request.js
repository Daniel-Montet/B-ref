import https from "https";

// write a test for this using Jest
const request = (function RequestAPI() {
  const error = null;
  let str = null;


  function callback(response) {
    response.on("data", (chunk) => {
      str += chunk;
    });

    response.on("end", () => {
      console.log(str);
      console.log("End of response");
    });
  }

  function get(options) {
    const req = https.request(options, callback);
    req.on("error", (err) => {
      error += err;
      console.log(error);
    });

    req.end();
  }

  return {
    get: get,
  };
})();

export default request;
