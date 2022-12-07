function solution(progresses, speeds) {
  const answer = [];
  let Time = [];
  let max = 0;

  const init = (days) => {
    max = days < 2 ? 2 : days;
    Time.push(days < 2 ? 2 : days);
  };

  progresses.forEach((v, i) => {
    const days = Math.ceil((100 - v) / speeds[i]);

    if (!Time.length && !max) init(days);
    
    else {
      if (max < days) {
        max = days < 2 ? 2 : days;
        answer.push(Time.length);
        Time = [];
      }
      Time.push(days < 2 ? 2 : days);
    }
  });

  if (Time) answer.push(Time.length);
  return answer;
}

const progresses = [1, 1, 50];
const speeds = [100, 2, 1];

console.log(solution(progresses, speeds));
