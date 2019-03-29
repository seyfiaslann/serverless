const config = require('./config');

exports.handler = function (event, context, callback) {
    const response = {
        statusCode: 200,
        headers: {
            "x-custom-header": "My Header Value - " + config.get('secret_variable')
        },
        body: JSON.stringify({"message": "Hello World!?"})
    };

    callback(null, response);
};