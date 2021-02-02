module.exports = async function (context, req) {
  var fs = require('fs');
  fs.readFile( __dirname + '/rdu-weather-history.json', function (err, data) {
    if (err) {
      throw err; 
    }
  });
  
  context.res = {
    body: {
      text: data.toString()
    }
  };
};
