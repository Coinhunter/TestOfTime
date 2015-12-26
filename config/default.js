module.exports = {

  // The current environment
  mode: 'default',

  // Server config
  api: {
    name: 'TestOfTime',
    port: 3000
  },

  admin: {
    name: 'TestOfTimeAdmin',
    port: 8080
  },

  secrets: {
    cookie: 'thisshouldbehardtoguess'
  },

  // Database options
  mongo: {
    uri: 'mongodb://localhost/testoftime'
  },

  // Logging configuration
  logging: {
    level: 'info'
  },  

  // Salt string used to obfuscate ids
  // This string should never change
  hashid_salt: 'The Problem Is Not The Problem'

  //Base64 authorization header: Basic dGVzdG9mdGltZUB0aW1lLm5vdzpwYXNzd29yZA==

};
