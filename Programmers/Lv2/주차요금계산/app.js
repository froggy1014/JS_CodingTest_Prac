function solution(fees, records) {
  const [base_t, base_f, unit_m, unit_f] = fees;
  let carList = [];
  let mapD = new Map();

  records.forEach((v) => {
    const [time, plate, state] = v.split(' ');
    const [hour, min] = time.split(':');
    if (state === 'IN') {
      if (carList.indexOf(plate) === -1) {
        mapD.set(`${plate}_acc`, 0);
        carList.push(plate);
      }
      mapD.set(`${plate}_time`, [hour * 1, min * 1]);
    } else {
      let inTime = mapD.get(`${plate}_time`);
      mapD.set(
        `${plate}_acc`,
        mapD.get(`${plate}_acc`) +
          (Number(hour) - inTime[0]) * 60 +
          (Number(min) - inTime[1])
      );
      mapD.delete(`${plate}_time`);
    }
  });

  const left = [...mapD]
    .filter((v) => v[0].includes('_time'))
    .forEach((v) => {
      let plate = v[0].split('_')[0];
      let inTime = v[1];
      mapD.set(
        `${plate}_acc`,
        mapD.get(`${plate}_acc`) + (23 - inTime[0]) * 60 + (59 - inTime[1])
      );
      mapD.delete(`${plate}_time`);
    });

  [...mapD].forEach((v) => {
    if(v[0].includes('_acc')) {
      let plate = v[0].split('_')[0];
      mapD.set(`${plate}_money`, cal(mapD.get(`${plate}_acc`)));
    }
  })

  function cal(total) {
    if (total < base_t) return base_f;
    return base_f + Math.ceil((total - base_t) / unit_m) * unit_f;
  }

  return [...mapD]
    .filter((v) => v[0].includes('_money'))
    .sort((a, b) => a[0].split('_')[0] - b[0].split('_')[0])
    .map((v) => v[1]);
}
const fees = [120, 0, 60, 591];
const records = ["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"];
console.log(solution(fees, records))