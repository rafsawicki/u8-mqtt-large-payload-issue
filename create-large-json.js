export function createLargePayload() {
  const obj = {};

  // the current settings genertes a JSON of around 10 MB
  for (let i = 0; i < 70000; i++) {
    obj[i] =
      'barbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbar';
  }

  return JSON.stringify(obj);
}
