import aedes from 'aedes';
import { createServer } from 'net';

export function createMqttBroker() {
  return new Promise((resolve) => {
    const broker = aedes();
    const server = createServer(broker.handle);

    server.listen(1883, () => {
      console.log('MQTT server listening on port 1883');
      resolve(broker);
    });
  });
}
