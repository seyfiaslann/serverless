const convict  = require('convict');

// Define a schema
const config = convict({
    secret_variable: {
        doc: "Test secret variable",
        format: String,
        default: "XXXXX",
    },
});

// Load environment dependent configuration
config.loadFile('env.json');

// Perform validation
config.validate({allowed: 'strict'});

module.exports = config;