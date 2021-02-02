module.exports = async function (context, req) {
    const data = "blablabla";
    
    context.res = {
      body: { 
        text: data 
      }
    };
  };
