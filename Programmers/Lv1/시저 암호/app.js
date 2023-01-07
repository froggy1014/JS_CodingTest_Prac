function solution(s, n) {
  // 일단 아스키 코드를 받을 배열을 만들어줍니다.
  let answer = [];

  // 문자열의 길이만큼 순회를 돕니다. 
  for ( let i = 0 ; i < s.length ; i++ ) {

    // 대문자인지에 대한 확인을 위한 플래그
    let Upper = false;

    // 만약 a-z 범위에서 벗어나는지 확인을 위한 조건 
    if(s.toUpperCase().charCodeAt(i) + n > 90 ) {
      // 대문자인지 확인한다. 그리하여 플래그를 세운다
      if(s[i].toUpperCase() === s[i]) Upper = true;

      // a-z범위에서 벗어난 만큼을 계산합니다.
      let min = s.toUpperCase().charCodeAt(i) + n - 90;

      // 소문자, 대문자에 따른 다른 기준값을 넣어서 answer에 넣어준다.
      Upper ? answer.push(65 + min - 1) : answer.push(97 + min - 1)
    } else {
      // 공백이라면 그대로 answer에 넣고 공백이 아니고, a-z범위에서 안 벗어난다면 n만큼 알파벳을 움직인다.
      answer.push(s.charCodeAt(i) === 32 ? s.charCodeAt(i) : s.charCodeAt(i) + n);
    }
  } 
  return String.fromCharCode(...answer);
}

console.log(solution("a B z", 4))