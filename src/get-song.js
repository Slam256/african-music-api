const { music } = require("./songs");

const getSong = (req) => {
  let response;
  const songName = req.params.name.toLowerCase();
  if (songName && music[songName]) {
    response = music[songName];
    // status 200
  } else if (songName === "all") {
    response = music;
    // status 200
  } else {
    response = music.unknown;
    // return status 404
  }
  return response;
};

exports.getSong = getSong;
