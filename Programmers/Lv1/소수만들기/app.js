function solution(nums) {
  let answer = 0;
  
  const isPrime = (num)  => {
    if( num < 2) return false;
    for (let i = 2 ; i*i <= num ; i++) {
      if(num % i === 0) return false;
    } 
    return true;
  }

  for(let i = 0; i < nums.length - 2; i++ ){
    for(let j = i+1; j < nums.length - 1; j++ ){
      for(let k = j+1; k < nums.length; k++ ) {
        let sum = nums[i] + nums[j] + nums[k];
        if(isPrime(sum)) answer++
      }
    }
  }
  
  return answer;
}

console.log(solution([1,2,7,6,4]));