import https from "https";

// write a test for this using Jest
const request = (function RequestAPI() {
  const error = null;
  let str = null;

  async function data() {
    return { data: str, error: error };
  }

  function callback(response) {
    response.on("data", (chunk) => {
      str += chunk;
    });

    response.on("end", () => {
      console.log(str);
      console.log("End of response");
    });
  }

  function init(options) {
    const req = https.request(options, callback);
    req.on("error", (err) => {
      error += err;
      console.log(error);
    });

    req.end();
  }

  return {
    data: data,
    init: init,
  };
})();

export default request;
