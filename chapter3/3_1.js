function palindrome(str)
{
  const sentence = str.toLowerCase();
  let rev_sen = '';
  for (let i=sentence.length-1; i >= 0; i--){
     rev_sen += sentence[i];
  }
  if (sentence == rev_sen)
    return "YES";
  else return "NO";
}
const str = "goog"
console.log(palindrome(str))