function fooBar() {
  for (let number = 1; number <= 1000; number++) {
    if (number % 21 === 0) {
      console.log('foobar');
      continue;
    }
    if (number % 3 === 0) {
      console.log('foo');
      continue;
    }
    if (number % 7 === 0) {
      console.log('bar');
      continue;
    }
    console.log(number);
  }
}
