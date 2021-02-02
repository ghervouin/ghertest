module.exports = async function (context, req) {
    const data = "[{\"fogground\": null}" \ 
    ",{\"fogground\": null, \"snowfall\": 0.0}" \ 
    "]";
    context.res = {
      body: { 
        text: data 
      }
    };
  };
