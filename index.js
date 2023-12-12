
const msgs1 = require('./send-messages/say-hello-to');
const msgs2 = require('./send-messages/give-message-to-mrs-potato');
const msgs3 = require('./messages/index');

sayHelloTo = msgs1.sayHelloTo;

msg1 = msgs3.message1;
msg2 = msgs3.message2;
msg3 = msgs3.message3;

giveMessageToMrsPotato   = msgs2.giveMessageToMrsPotato;

// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
