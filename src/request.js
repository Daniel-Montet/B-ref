import https from "https";
import { to } from "./to.js";

// write a test for this using Jest
const request = (function RequestAPI() {
  let data = null;

  const get = () => {
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
  };

  function urlParse() {
    let myURL;

    try {
      myURL = new URL(this);
      return {
        error: null,
        options: {
          hostname: myURL.hostname,
          port: 443,
          path: myURL.pathname,
          method: "GET",
        },
      };
    } catch (error) {
      return { error: error };
    }
  }

  const init = async (url) => {
    const { error, options } = urlParse.call(url);

    if (error !== null) {
      return { error };
    }

    return to(get.call(options));
  };

  return {
    init: init,
  };
})();

export default request;
