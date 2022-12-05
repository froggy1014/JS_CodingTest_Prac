function solution(str) {

  const brasketArray = str.split('');

  let answer = 0;

  for( let i = 0 ; i < brasketArray.length; i++){
    if(validation(brasketArray)) answer += 1;
    spinning();
  }

  function spinning(){
    const front = brasketArray.shift();
    brasketArray.push(front);
  }

  function validation(arr){
    let string = '';
    const brasketList = ['()','[]','{}'];
    arr.forEach((v) => {
      string += v
      brasketList.forEach((v) => string.includes(v) ? string = string.slice(0, -2) : null);
    })
    return string.length === 0 ? true : false
  }
  return answer;
}
console.log(solution("[](){}"));
