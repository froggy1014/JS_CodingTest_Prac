function palindrome(str)
{
  var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
  const t = str.toLowerCase().replace(regExp, "")
  for (let i = 0; i < Math.floor(t.length/2); i++)
    if (t[i] !== t[t.length-i-1]) return "NO"
  return "YES"
}
const str = "found7, time: study; Yduts; emit, 7Dnuof"
console.log(palindrome(str))

