import { mqtt_v4 } from 'u8-mqtt';

export function createU8MqttClient() {
  return new Promise(async (resolve) => {
    const client = mqtt_v4({
      on_live,
    }).with_tcp('tcp://localhost:1883');

    async function on_live() {
      await client.connect();

      await client.subscribe('foo');

      client.on_topic('foo', (pkt) => {
        console.log(`[u8-mqtt] Got message with length ${pkt.utf8().length}`);
      });

      resolve(client);
    }

    return client;
  });
}
