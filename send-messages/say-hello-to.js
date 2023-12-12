const smsg = require('../messages/say-message');


sayMessage = smsg.sayMessage;


function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");


module.exports.sayHelloTo = sayHelloTo;
