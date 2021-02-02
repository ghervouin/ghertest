module.exports = async function (context, req) {
  
  fs.readFile(__dirname + '/rdu-weather-history.json', function(err, data) {
        if (err) throw err;
        fileContent = data;
        context.res = { body : { name : parts[0].filename, type: parts[0].type, data: fileContent}}; 
        context.done();  
    });
};
