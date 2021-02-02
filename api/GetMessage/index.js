module.exports = async function (context, req) {
  context.res = {
    body: {
      text: "{"id":2,"content":"Hello, User!"}"
    }
  };
};
