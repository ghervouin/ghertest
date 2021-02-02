module.exports = async function (context, req) {
    const data = "[{\"fogground\": null, \"snowfall\": 0.0, \"dust\": null, \"snowdepth\": 0.0, \"mist\": \"Present\"}" \ 
",{\"fogground\": null, \"snowfall\": 0.0, \"dust\": null, \"snowdepth\": 0.0, \"mist\": \"Present\"]";
    
    context.res = {
      body: { 
        text: data 
      }
    };
  };
