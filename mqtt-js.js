import mqtt from 'mqtt';

export async function createMqttJsClient() {
  const client = await mqtt.connectAsync('mqtt://localhost:1883');

  await client.subscribeAsync('foo');

  client.on('message', function (topic, message) {
    console.log(`[mqtt.js] Got message with length ${message.toString().length}`);
  });

  return client;
}
