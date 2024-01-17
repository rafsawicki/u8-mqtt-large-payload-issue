### Steps to reproduce

```sh
npm install

node .
```

### Result

```
Publishing small payload
[u8-mqtt] Got message with length 13
[mqtt.js] Got message with length 13

Publishing large payload
[mqtt.js] Got message with length 11888891
```


### Expected result

```
Publishing small payload
[u8-mqtt] Got message with length 13
[mqtt.js] Got message with length 13

Publishing large payload
[u8-mqtt] Got message with length 11888891
[mqtt.js] Got message with length 11888891
```

