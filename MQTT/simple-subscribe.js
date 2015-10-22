var mqtt = require('mqtt')
  , client = mqtt.connect('mqtt://ec2-54-186-55-177.us-west-2.compute.amazonaws.com:1883');

client.subscribe('teste');
client.on('message', function(topic, message) {
  console.log(message.toString());
});
