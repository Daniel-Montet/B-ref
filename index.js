import request from "./src/request.js";

const hrefRegexpattern = /href=\W(http\w:\/\/)(\w+\W|\w+){1,}/gm;

function match(pattern, string) {
  return string.match(pattern);
}

( async function init() {
  let { error, data } = await request.get("https://regex101.com/account/mine");
  if (error !== null) {
    console.log(error);
  }

  let matches = match(hrefRegexpattern, data);
  console.log(matches);
}
)();