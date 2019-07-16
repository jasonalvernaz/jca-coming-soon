exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "Form Submitted!" })
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
  // console.log(event.body);
  // callback(null, {
  //   statusCode: 200,
  //   body: JSON.stringify({ msg: "Form Submitted!" })
  // });
};
