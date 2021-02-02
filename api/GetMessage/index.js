var fs = require('fs');

module.exports = async function (context, req) {
    var path = __dirname + '//weather.json';
    
        context.res = {
          body: { 
            text: path 
          }
        };
    
    
  };
