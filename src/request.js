import https from "https";
import { to } from "./to.js";

// write a test for this using Jest
const request = (function RequestAPI() {
  let data = null;

  function init() {
    return new Promise((resolve, reject) => {
      const request = https.request(this, (response) => {
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
  }

  function urlParse() {
    let myURL;

    try {
      myURL = new URL(this);

      return {
        error: null,
        options: {
          hostname: myURL.hostname,
          port: myURL.port,
          path: myURL.pathname,
          method: "GET",
        },
      };
    } catch (error) {
      return { error: error };
    }
  }

  const get = async (url) => {
    const { error, options } = urlParse.call(url);
    // console.log(error);
    // console.log("data ", data);

    if (error !== null) {
      return { error };
    }

    return to(init.call(options));
  };

  return { get };
})();

export default request;
