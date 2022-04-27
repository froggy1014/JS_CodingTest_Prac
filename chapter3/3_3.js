function palindrome(str)
{
  let t = str.toLowerCase().replace(/[a-z]/g,'').split('')
    while(true){
      if (t[0] <= 0)
        t.shift();
      else return t.join('');
    } 
}
const str = "00030501020000g0en2T0145s8eSoft"
console.log(palindrome(str))

