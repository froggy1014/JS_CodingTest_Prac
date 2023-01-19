function solution(skill, skill_trees) {
  var answer = 0;
  
  var regex = new RegExp(`[^${skill}]`, 'g');

  const a = console.log(skill_trees[0].replace(regex, ''));
  const b = console.log(skill_trees[1].replace(regex, ''));
  const c = console.log(skill_trees[2].replace(regex, ''));
  const d = console.log(skill_trees[3].replace(regex, ''));

  const aa = [a,b,c,d].filter(x => skill.indexOf(x) === 0 || x === "");

  console.log(aa);

  return skill_trees
      .map((x) => x.replace(regex, ''))
      .filter((x) => {
          return skill.indexOf(x) === 0 || x === "";
      })
      .length
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "C"]));