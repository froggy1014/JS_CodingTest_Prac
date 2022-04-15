
// str.substr(start[, length])
// str.substring(indexStart[, indexEnd])
// str.slice(beginIndex[, endIndex])
      
      
      
      function solution(s){  
                let answer;
                let mid=Math.floor(s.length/2)
                if(s.length%2===1) answer=s.substring(mid, mid+1);
                else answer=s.substring(mid-1, mid+1);
                //if(s.length%2===1) answer=s.substr(mid, 1);
                //else answer=s.substr(mid-1, 2);
                return answer;
            }
            console.log(solution("study"));
