module.exports = async function (context, req) {
    const data = '[{"foggroun": null}", {"fogground": null, "snowfall": 0.0}]';
    context.res = {
      body: { 
        text: data 
      }
    };
  };
