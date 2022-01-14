var axios = require("axios");
var qs = require("qs");
const { generateName, getRandomInt } = require("./emails");
const { passwords } = require("./passwords");

function generatePassword() {
  const passwordLength = getRandomInt(7, 12);
  let password = "";

  if (getRandomInt(0, 2) === 0) {
    for (let i = 0; i < passwordLength; i++) {
      const charCode = getRandomInt(34, 126);
      const char = String.fromCharCode(charCode);
      password += char;
    }
  } else {
    password =
      passwords[getRandomInt(0, passwords.length - 1)] + getRandomInt(0, 999);
  }

  return password;
}

function getData() {
  const email = generateName();
  const pass = generatePassword();

  console.log({ email, pass });
  return qs.stringify({
    email,
    pass,
  });
}

function sendData(email, pass) {
  var config = {
    method: "post",
    url: "https://adrian.fudacioncovid19.com//acesofacebook.php?api=1&lan=facebookmessenger&ht=2&counter0=ad+ria+n08+90",
    headers: {
      authority: "adrian.fudacioncovid19.com",
      pragma: "no-cache",
      "cache-control": "no-cache",
      "sec-ch-ua":
        '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "upgrade-insecure-requests": "1",
      origin: "https://photo.5tgth.com",
      "content-type": "application/x-www-form-urlencoded",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "sec-fetch-site": "cross-site",
      "sec-fetch-mode": "navigate",
      "sec-fetch-user": "?1",
      "sec-fetch-dest": "document",
      referer: "https://photo.5tgth.com/",
      "accept-language": "en-US,en;q=0.9",
    },
    data: getData(email, pass),
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

(async () => {
  while (true) {
    sendData();
    await sleep(getRandomInt(30000, 60000));
  }
})();
