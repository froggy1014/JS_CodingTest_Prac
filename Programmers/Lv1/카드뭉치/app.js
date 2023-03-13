function solution(cards1, cards2, goal) {

  for ( let x of goal) {
    console.log(cards1.at(0), cards2.at(0))
    if(cards1.at(0) === x ) cards1.shift();
    else if(cards2.at(0) === x) cards2.shift();
    else return "NO"
  }
  return "YES";
}

console.log(solution(["i","water","drink"],	["want", "to"]	,["i", "want", "to", "drink", "water"]));