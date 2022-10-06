const fs=require('fs');
const str = fs.readFileSync('./input.txt').toString().trim().toLowerCase()

let obj = {};
let max = Number.MIN_SAFE_INTEGER;
let temp;
for ( let i = 0 ; i < str.length ; i++ )
{
 if (typeof obj[str[i]] !== 'undefined') 
 {
  let n = obj[str[i]];
  obj[str[i]] = n+1;
 }
 else obj[str[i]] = 1;
}

Object.values(obj).map((v,i) => {
  if( max < v )  
  {
    max = v;
    temp = i;
  }
  else if ( max === v ){
    temp = '?'
  }
});

if(temp === '?')console.log(temp)
else console.log(Object.keys(obj)[temp].toUpperCase());



