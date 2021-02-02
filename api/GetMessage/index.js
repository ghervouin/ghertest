module.exports = async function (context, req) {
    const txt = "[{\"fogground\": null, \"snowfall\": 0.0, \"dust\": null, \"snowdepth\": 0.0}" \ 
",{\"fogground\": null, \"snowfall\": 0.0, \"dust\": null, \"snowdepth\": 0.0}" \ 
",{\"fogground\": null, \"snowfall\": 0.0, \"dust\": null, \"snowdepth\": 0.0}" \ 
"]";
  
    context.res = {
      body: { 
        text: "Hello from the API" 
      }
    };
  };
