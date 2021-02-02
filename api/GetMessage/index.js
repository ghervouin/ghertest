module.exports = async function (context, req) {
    var message = "[{fogground: null}" \ 
    ",{fogground: null}" \ 
    ",{fogground: null}" \ 
    "]";
    context.res = {
      body: { 
        text: "Hello from the API 2" 
      }
    };
  };
