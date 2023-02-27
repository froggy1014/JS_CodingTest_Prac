function solution(participant, completion) {
  const people = participant.sort();
  const success = completion.sort();

  for(let i = 0; i < people.length; i++) {
    if(success[i] !== people[i]) return people[i];
  }
}

console.log(solution(["mislav", "stanko", "mislav", "ana", "mislav"], ["stanko", "ana", "mislav", "mislav"]))