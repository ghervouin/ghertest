var message = "[{fogground: null}" \ 
    ",{fogground: null}" \ 
    ",{fogground: null}" \ 
    "]";

module.exports = async function (context, req) {
    context.res = {
      body: { 
        text: "Hello from the API 2" 
      }
    };
  };
