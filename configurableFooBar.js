const fooBarConfig = [
  ['foo', (i) => i % 3 === 0],
  ['bar', (i) => i % 7 === 0],
  ['fooBar', (i) => i % 21 === 0],
];

const gregorianConfig = [
  ['leap', (i) => i % 400 === 0 || (i % 4 === 0 && i % 100 !== 0)],
];

const abraCadabraConfig = [
  ['abra', (i) => i.toString() === i.toString().split('').reverse().join('')],
  [
    'cadabra',
    (i) => i.toString() !== i.toString().split('').reverse().join(''),
  ],
];

function fooBar(configs) {
  for (let number = 1; number <= 1000; number++) {
    let text;
    configs.forEach((config) => {
      if (config[1](number)) {
        text = config[0];
      }
    });
    console.log(text || number);
  }
}
