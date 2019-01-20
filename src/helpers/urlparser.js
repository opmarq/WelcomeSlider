const urlParser = (url) => {

  let match = url.match(/.*?\?(.*)/);

  let obj = {
  }

  if (match) {
    match[1].split("&").forEach(param => {

      let nameValue = param.split("=");

      obj[nameValue[0]] = parseInt(nameValue[1]);

    })
  }
  return obj;
}

export default urlParser;