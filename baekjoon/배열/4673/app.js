let array = [];

function d(n) {
  let sum = n;
  while (1) {
    if (n == 0) break;
    sum += n % 10;
    n = parseInt(n / 10);
  }
  array[sum] = sum;
  return sum;
}


for (let n = 1; n <= 10000; n++) {
  d(n);
  if (array[n] === undefined) {
    console.log(n);
  }
}