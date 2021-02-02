var fs = require('fs');
fs.readFile( __dirname + '/rdu-weather-history.json', function (err, data) {
  if (err) {
    throw err; 
  }
});

module.exports = async function (context, req) {
  context.res = {
    body: {
      text: data.toString()
    }
  };
};
