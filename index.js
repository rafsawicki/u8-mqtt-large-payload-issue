import mqtt from 'mqtt';
import { createMqttBroker } from './broker.js';
import { createMqttJsClient } from './mqtt-js.js';
import { createU8MqttClient } from './u8-mqtt.js';
import { createLargePayload } from './create-large-json.js';

async function test() {
  const broker = await createMqttBroker();

  const u8Client = await createU8MqttClient();
  const mqttJsClient = await createMqttJsClient();

  const publisher = await mqtt.connectAsync('mqtt://localhost:1883');

  // publish small payload
  await publisher.publishAsync('foo', JSON.stringify({ foo: 'bar' }));

  // publish large payload
  await publisher.publishAsync('foo', createLargePayload());

  // result - for the first message both clients log the result, for the second message - only MQTT.js logs it
}

test();
