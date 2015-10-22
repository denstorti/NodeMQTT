var mqtt = require('mqtt')
  , client = mqtt.connect('mqtt://ec2-54-186-55-177.us-west-2.compute.amazonaws.com:1883');

client.publish('teste', 'mensagem de teste mqtt publisher', {qos: 1, retain: true});

client.end();
