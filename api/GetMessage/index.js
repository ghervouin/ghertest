var fs = require('fs');

module.exports = async function (context, req) {
    var path = __dirname + '//weather.json';
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            context.log.error(err);
            context.done(err);
        }

        var result = JSON.parse(data);
        context.log(result.name);
        context.res = {
          body: { 
            text: result 
          }
        };
    });
    
  };
