import https from "https";

// write a test for this using Jest
const request = (function RequestAPI() {
  const error = null;
  let data = null;

  function callback(response) {
    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      console.log(data);
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

  const get = (options) => {
    return new Promise((resolve, reject) => {
      const request = https.request(options, (response) => {
        response.on("data", (chunk) => (data += chunk));

        response.on("end", () => {
          console.log("End of response");
          resolve(data);
        });
      });

      request.on("error", (error) => {
        reject(error);
      });

      request.end();
    });
  };

  return {
    get: get,
  };
})();

export default request;
