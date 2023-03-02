function solution(number, limit, power) {
  const nums = [];

  for (let cur = 1; cur <= number; cur++) {
    let divisor = 0;

    for (let i = 1; i <= cur / 2; i++) {

      if (cur % i === 0) {
        divisor += 1;
      }
    }

    nums.push(divisor + 1);
  }

  return nums
    .map((n) => n > limit ? power : n)
    .reduce((acc, cur) => acc + cur, 0);
}