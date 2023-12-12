const msg = require('./hello-message');

helloMessage = msg.helloMessage;

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);

module.exports.sayMessage = sayMessage;
